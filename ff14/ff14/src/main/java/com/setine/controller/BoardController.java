package com.setine.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
import com.setine.db.mongo.BoardDAO;
import com.setine.db.mongo.model.Board;
import com.setine.db.mongo.model.BoardInfo;
import com.setine.db.mongo.model.Language;
import com.setine.db.mongo.model.NavData;
import com.setine.dto.ResponseDTO;

@Controller
public class BoardController {

	@Autowired
	private CommonFn commonFn;
	@Autowired
	private Properties text_kr;
	@Autowired
	private Properties text_en;
	@Autowired
	private Properties text_jp;
	@Autowired
	private BoardDAO BoardDAO;
	@Autowired
	private JsonFn JsonFn;
	
	@RequestMapping(value = { "/board" }, method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request, ModelMap model) throws Exception {
		ModelAndView result = new ModelAndView();
		Language Language = commonFn.setLanguageData(text_kr, text_en, text_jp, request.getServerName());

		// 기본 설정
		String target = "board";
		String targetName = "통합 게시판";
		String rawNavData = "/board," + targetName;

		// 나비 프로세스
		ArrayList<NavData> navList = commonFn.setHomeNavData();
		navList.add(commonFn.setNavData(rawNavData));
		result.addObject("navlist", navList);

		// 최종 프로세스
		commonFn.setDefaultSetting(model, Language, target, targetName);
		result.setViewName("board/index");
		return result;
	}

	// POST
	@RequestMapping(value = { "/board" }, method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public @ResponseBody String update(@RequestBody String data) throws IOException {

		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);

		// 본문 프로세스
		String question = commonFn.checkVDQuestion((String) resultMap.get("q"));
		int limit = 10;
		int cPage = commonFn.checkVDInt((String)resultMap.get("page"), -1);
		int sType = 1;

		BoardInfo boardInfo = new BoardInfo(limit,cPage,question,sType);
		ArrayList<Board> datalist_raw = setDataList(boardInfo, "FF14K_board", "FF14K_datalist");
		ArrayList<Board> datalist = setUniqueList(datalist_raw);
		
		// 리턴 값
		msg = "good";
		resultMap.remove("_csrf");

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, datalist, resultMap, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}
	
	@RequestMapping(value = { "/board/ff14kboard" }, method = RequestMethod.GET)
	public ModelAndView detail(HttpServletRequest request, ModelMap model) throws Exception {
		ModelAndView result = new ModelAndView();
		Language Language = commonFn.setLanguageData(text_kr, text_en, text_jp, request.getServerName());

		// 기본 설정
		String target = "ff14kboard";
		String targetName = "FF14 KOREA";
		String rawNavData = "/board/" + target + "," + targetName;

		// 나비 프로세스
		ArrayList<NavData> navList = commonFn.setHomeNavData();
		navList.add(commonFn.setNavData(rawNavData));
		result.addObject("navlist", navList);

		// 최종 프로세스
		commonFn.setDefaultSetting(model, Language, target, targetName);
		result.setViewName("board/list");
		return result;
	}

	// POST
	@RequestMapping(value = { "/board/ff14kboard" }, method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public @ResponseBody String ff14kboardupdate(@RequestBody String data) throws IOException {

		// 기본 파라미터 세팅
		int code = 0;
		String msg = "";
		ObjectMapper mapper = JsonFn.setMapper();

		Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);
		String question = commonFn.checkVDQuestion((String) resultMap.get("q"));
		
		int limit = 10;
		int cPage = 1;
		int sType = 1;
		
		// 본문 프로세스
		BoardInfo boardInfo = new BoardInfo(limit, cPage, question, sType);

		// 본문 프로세스
		ArrayList<Board> datalist_raw = setDataList(boardInfo, "FF14K_board", "FF14K_datalist");
		ArrayList<Board> datalist = setUniqueList(datalist_raw);
		
		// 리턴 값
		msg = "good";
		resultMap.remove("_csrf");

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(msg, datalist, resultMap, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}
	
	private ArrayList<Board> setDataList(BoardInfo boardInfo, String collections, String datalist) {
		boardInfo = BoardDAO.getBaordCountData(boardInfo, collections);
		if (boardInfo.getTotalPageCount() < boardInfo.getcPage()) {
			boardInfo.setcPage(Integer.parseInt(boardInfo.getTotalPageCount() + ""));
		}
		ArrayList<Board> getDataList = BoardDAO.getBoards(boardInfo, collections);
		return getDataList;
	}

	private ArrayList<Board> setUniqueList(ArrayList<Board> datalist) {
		List<HashMap<Integer,Board>> tempdata = new ArrayList<HashMap<Integer,Board>>();
		
		for (int i = 0; i < datalist.size(); i++) {
			HashMap<Integer,Board> tempMap = new HashMap<Integer,Board>();
			tempMap.put(datalist.get(i).getKey(), datalist.get(i));
			int count = 0;
			
			for (int j = 0; j < tempdata.size(); j++) {
				int key = tempdata.get(j).keySet().iterator().next();
				if (key == datalist.get(i).getKey()) {
					count += 1;
				}
			}
			if (count == 0) {
				tempdata.add(tempMap);				
			}
		}
		
		datalist.clear();
		for (int i = 0; i < tempdata.size(); i++) {
		    SimpleDateFormat form = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		    String date_c = form.format(tempdata.get(i).values().iterator().next().getDate());
		    tempdata.get(i).values().iterator().next().setDate_c(date_c);
		    tempdata.get(i).values().iterator().next().setDate(null);
		    
			datalist.add(tempdata.get(i).values().iterator().next());
		}
		return datalist;
	}
}
