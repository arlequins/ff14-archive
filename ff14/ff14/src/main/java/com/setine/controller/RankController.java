package com.setine.controller;

import java.io.IOException;
import java.text.ParseException;
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
import com.setine.common.JsonFn;
import com.setine.db.mongo.model.Language;
import com.setine.db.mongo.model.NavData;
import com.setine.dto.ResponseDTO;

@Controller
public class RankController {

	@Autowired
	private CommonFn commonFn;
	@Autowired
	private Properties text_kr;
	@Autowired
	private Properties text_en;
	@Autowired
	private Properties text_jp;
	@Autowired
	private JsonFn JsonFn;

	@RequestMapping(value = { "/rank" }, method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request, ModelMap model) throws Exception {
		Language Language = commonFn.setLanguageData(text_kr, text_en, text_jp, request.getServerName());

		// 기본 설정
		String target = "home";
		String targetName = "";

		// 나비 프로세스
		ArrayList<NavData> navList = commonFn.setHomeNavData();

		// 최종 프로세스
		commonFn.setDefaultSetting(model, Language, target, targetName);
		return new ModelAndView("rank/index", "navlist", navList);
	}

	// POST
	@RequestMapping(value = "/rank", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public @ResponseBody String update(@RequestBody String data) throws IOException, ParseException {
		
		// 기본 파라미터 세팅
		int code = 0;
 		ObjectMapper mapper = JsonFn.setMapper();

		Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);

		@SuppressWarnings("unused")
		String date = (String) resultMap.get("date");
		
		// 리턴 값
		resultMap.remove("_csrf");

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(null, null, resultMap, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}
}
