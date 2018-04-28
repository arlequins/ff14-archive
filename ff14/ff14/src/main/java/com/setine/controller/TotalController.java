package com.setine.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
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
public class TotalController {

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

	@RequestMapping(value = { "/total" }, method = RequestMethod.GET)
	public ModelAndView main(ModelMap model, HttpServletRequest request) {
		ModelAndView result = new ModelAndView();
		Language Language = commonFn.setLanguageData(text_kr, text_en, text_jp, request.getServerName());

		// parameter 값 정리
		String question_raw = request.getParameter("q");

		// path 위치 판독
		String target = "total";
		String targetName = Language.getText().getProperty("common.menu.total");
		String rawNavData = "/" + target + "," + targetName;

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
	@RequestMapping(value = { "/db/total" }, method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public @ResponseBody String update(@RequestBody String data) throws IOException {

		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);

		String question = commonFn.checkVDQuestion((String) resultMap.get("q"));
		int category = commonFn.checkVDInt((String) resultMap.get("category"), -1);

		// 본문 프로세스
		ArrayList<Total> datalist = dataFn.getTotalList(question, category);
		
		// 리턴 값
		msg = "good";
		resultMap.remove("_csrf");

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, datalist, resultMap, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}
}
