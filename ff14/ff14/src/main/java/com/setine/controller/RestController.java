package com.setine.controller;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.common.CommonFn;
import com.setine.common.DataFn;
import com.setine.common.JsonFn;
import com.setine.db.model.Total;
import com.setine.dto.ResponseDTO;

@Controller
public class RestController {

	@Autowired
	private CommonFn commonFn;
	@Autowired
	private DataFn dataFn;
	@Autowired
	private JsonFn JsonFn;

	// POST
	@RequestMapping(value = { "/dbfinder/index/{path}/{index}" }, method = { RequestMethod.POST, RequestMethod.GET }, produces = "application/json; charset=utf8")
	public @ResponseBody String update(@PathVariable("path") String path, @PathVariable("index") int index) throws IOException {

		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		int path_count = getPathLocation(path);
		int category = commonFn.checkVDInt(index + "", 1);

		// 본문 프로세스
		ArrayList<Total> datalist = getData(path_count, "", category);

		// 리턴 값
		msg = "good";

		if (datalist.size() == 0) {
			code = 1;
			msg = "bad";
		}
		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, datalist, "", code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}

	// POST
	@RequestMapping(value = { "/dbfinder/question/{path}/{index}" }, method = { RequestMethod.POST, RequestMethod.GET }, produces = "application/json; charset=utf8")
	public @ResponseBody String question(@PathVariable("path") String path, @PathVariable("index") String question_raw) throws IOException {

		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		int path_count = getPathLocation(path);
		int category = -1;
		String question = commonFn.checkVDQuestion(question_raw);

		// 본문 프로세스
		ArrayList<Total> datalist = getData(path_count, question, category);

		// 리턴 값
		msg = "good";

		if (datalist.size() == 0) {
			code = 1;
			msg = "bad";
		}

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, datalist, "", code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}

	// POST
	@RequestMapping(value = { "/dbfinder/question/{index}" }, method = { RequestMethod.POST, RequestMethod.GET }, produces = "application/json; charset=utf8")
	public @ResponseBody String question_all(@PathVariable("index") String question) throws IOException {

		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		// 본문 프로세스
		ArrayList<Total> datalist = getDataAll(question);

		// 리턴 값
		msg = "good";

		if (datalist.size() == 0) {
			code = -1;
			msg = "bad";
		}

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, datalist, question, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}

	private ArrayList<Total> getDataAll(String question) {
		ArrayList<Total> value = new ArrayList<Total>();
		value = dataFn.getAllList(question);
		return value;
	}

	private ArrayList<Total> getData(int path_count, String question, int index) {
		ArrayList<Total> value = new ArrayList<Total>();
		switch (path_count) {
		case 1:
			value = dataFn.getAchievementList(question, index);
			break;
		case 2:
			value = dataFn.getDutyList(question, index);
			break;
		case 3:
			value = dataFn.getItemList(question, index);
			break;
		case 4:
			value = dataFn.getNpcList(question, index);
			break;
		case 5:
			value = dataFn.getQuestList(question, index);
			break;
		case 6:
			value = dataFn.getPlacenameList(question, index);
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
		} else if (path.contains("placename")) {
			count = 6;
		} else {
			count = 7;
		}
		return count;
	}
}
