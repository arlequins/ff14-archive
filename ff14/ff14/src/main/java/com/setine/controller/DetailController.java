package com.setine.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.common.CommonFn;
import com.setine.common.DataFn;
import com.setine.common.JsonFn;
import com.setine.db.model.Total;
import com.setine.db.mongo.model.Language;
import com.setine.db.mongo.model.NavData;
import com.setine.dto.ResponseDTO;

@Controller
public class DetailController {

	@Autowired
	private CommonFn commonFn;
	@Autowired
	private DataFn dataFn;
	@Autowired
	private Properties text_kr;
	@Autowired
	private Properties text_en;
	@Autowired
	private Properties text_jp;
	@Autowired
	private JsonFn JsonFn;

	@RequestMapping(value = { "/db/{path}" }, method = RequestMethod.GET)
	public ModelAndView main(ModelMap model, HttpServletRequest request, @PathVariable("path") String path) {
		ModelAndView result = new ModelAndView();
		Language Language = commonFn.setLanguageData(text_kr, text_en, text_jp, request.getServerName());

		// parameter 정리
		String[] targetRaw = { "achievement", "duty", "item", "npc", "quest" };
		String[] targetNameRaw = { Language.getText().getProperty("common.menu.achi"), Language.getText().getProperty("common.menu.duty"), Language.getText().getProperty("common.menu.item"), Language.getText().getProperty("common.menu.npc"),
				Language.getText().getProperty("common.menu.quest") };

		// path 위치 판독
		int path_count = getPathLocation(path);
		String question_raw = request.getParameter("q");
		String target = getTargetPath(targetRaw, path_count);
		String targetName = getTargetPath(targetNameRaw, path_count);
		String rawNavData = "/db/" + target + "," + targetName;
		result.addObject("question", question_raw);
		
		// 나비 프로세스
		ArrayList<NavData> navList = commonFn.setHomeNavData();
		navList.add(commonFn.setNavData(rawNavData));
		result.addObject("navlist", navList);

		// 최종 프로세스
		commonFn.setDefaultSettingbyQuestion(model, Language, target, targetName, question_raw);
		result.setViewName("detail");
		return result;
	}

	// POST
	@RequestMapping(value = { "/db/{path}" }, method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public @ResponseBody String update(@RequestBody String data, @PathVariable("path") String path) throws IOException {

		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);

		int path_count = getPathLocation(path);
		String question = commonFn.checkVDQuestion((String) resultMap.get("q"));
		int category = commonFn.checkVDInt((String) resultMap.get("category"), -1);

		// 본문 프로세스
		ArrayList<Total> datalist = getData(path_count, question, category);
		
		// 리턴 값
		msg = "good";
		resultMap.remove("_csrf");

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, datalist, resultMap, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}

	private ArrayList<Total> getData(int path_count, String question, int category) {
		ArrayList<Total> value = new ArrayList<Total>();
		switch (path_count) {
		case 1:
			value = dataFn.getAchievementList(question, category);
			break;
		case 2:
			value = dataFn.getDutyList(question, category);
			break;
		case 3:
			value = dataFn.getItemList(question, category);
			break;
		case 4:
			value = dataFn.getNpcList(question, category);
			break;
		case 5:
			value = dataFn.getQuestList(question, category);
			break;
		}
		return value;
	}

	private String getTargetPath(String[] target, int path_count) {
		String value = null;
		switch (path_count) {
		case 1:
			value = target[0];
			break;
		case 2:
			value = target[1];
			break;
		case 3:
			value = target[2];
			break;
		case 4:
			value = target[3];
			break;
		case 5:
			value = target[4];
			break;
		}
		return value;
	}

	private int getPathLocation(String path) {
		int count;
		if (path.contains("achievement")) {
			count = 1;
		} else if (path.contains("duty")) {
			count = 2;
		} else if (path.contains("item")) {
			count = 3;
		} else if (path.contains("npc")) {
			count = 4;
		} else if (path.contains("quest")) {
			count = 5;
		} else {
			count = 6;
		}
		return count;
	}
}
