package com.setine.controller;

import java.io.IOException;
import java.util.ArrayList;
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
import com.setine.dto.HomeDTO;
import com.setine.dto.ResponseDTO;

@Controller
public class HomeController {

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

	@RequestMapping(value = { "/" }, method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request, ModelMap model) throws Exception {
		Language Language = commonFn.setLanguageData(text_kr, text_en, text_jp, request.getServerName());

		// 기본 설정
		String target = "home";
		String targetName = "";

		// 나비 프로세스
		ArrayList<NavData> navList = commonFn.setHomeNavData();

		// 최종 프로세스
		commonFn.setDefaultSetting(model, Language, target, targetName);
		return new ModelAndView("index", "navlist", navList);
	}

	// POST
	@RequestMapping(value = "/home", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public @ResponseBody String update(@RequestBody String data) throws IOException {
		
		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		// 리턴 값
		HomeDTO homeObject = JsonFn.getHomeData();
		msg = "good";
		
		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, homeObject, null, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);
	
		return dtoAsString;
	}
	
//	// PUT
//	@RequestMapping(value = "/home", method = RequestMethod.PUT, produces = "application/json; charset=utf8")
//	public @ResponseBody String insert(@RequestBody String data) throws IOException {
//
//		// 기본 파라미터 세팅
//		int code = 0;
//		String msg = "";
//		ObjectMapper mapper = JsonFn.setMapper();		
//		// Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);
//		
//		// 리턴 값
//		// String dataNo = (String) resultMap.get("dataNo");
//		String homeJson = JsonFn.getHomeData();
//		msg = "good";
//		
//		// 최종 프로세스
//		ResponseDTO ResponseDTO = new ResponseDTO(msg, homeJson, code);
//		String dtoAsString = mapper.writeValueAsString(ResponseDTO);
//	
//		return dtoAsString;
//	}
//	// DELETE
//	@RequestMapping(value = "/home", method = RequestMethod.DELETE, produces = "application/json; charset=utf8")
//	public @ResponseBody String delete(@RequestBody String data) throws IOException {
//		// 기본 파라미터 세팅
//		int code = 0;
//		String msg = "";
//		ObjectMapper mapper = JsonFn.setMapper();		
//		// Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);
//		
//		// 리턴 값
//		// String dataNo = (String) resultMap.get("dataNo");
//		String homeJson = JsonFn.getHomeData();
//		msg = "good";
//		
//		// 최종 프로세스
//		ResponseDTO ResponseDTO = new ResponseDTO(msg, homeJson, code);
//		String dtoAsString = mapper.writeValueAsString(ResponseDTO);
//	
//		return dtoAsString;
//	}
	
}
