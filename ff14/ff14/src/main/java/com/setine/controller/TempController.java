package com.setine.controller;

import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.common.CommonFn;
import com.setine.common.JsonFn;
import com.setine.db.mongo.DataDAO;
import com.setine.db.mongo.model.ranking.Data;
import com.setine.db.mongo.model.ranking.RankingView;
import com.setine.dto.ResponseDTO;

@Controller
public class TempController {

	@Autowired
	private CommonFn commonFn;
	
	@Autowired
	private DataDAO DataDAO;
	@Autowired
	private JsonFn JsonFn;

	// POST
	@RequestMapping(value = "/ranktemp", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public @ResponseBody String update(@RequestBody String data) throws IOException, ParseException {
		
		ArrayList<RankingView> RankingViewList = new ArrayList<RankingView>();
		// 기본 파라미터 세팅
		int code = 0;
 		ObjectMapper mapper = JsonFn.setMapper();

		Map<String, Object> resultMap = commonFn.setRequestData(mapper, data);

		String date = (String) resultMap.get("date");
		String date2 = "";

		if (date == null) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String today = sdf.format(new Date());
			Calendar c = Calendar.getInstance();
			c.setTime(sdf.parse(today));
			c.add(Calendar.DATE, -1);  // number of days to add
//			date2 = sdf.format(c.getTime());  // dt is now the new date
			date2 = today;
		} else {
			date2 = date;
		}
	    
		// 본문 프로세스
		ArrayList<Data> reqData_g = DataDAO.getFeastByDate(date2, "FF14G_Ranking");
		int count_a = reqData_g.size();
		
		// 중국
		ArrayList<Data> reqData_c = DataDAO.getFeastByDate(date2, "FF14C_Ranking");
		int count_b = reqData_c.size();
		
		// 한국
		ArrayList<Data> reqData_k = DataDAO.getFeastByDate(date2, "FF14K_Ranking");
		int count_c = reqData_k.size();
		
		RankingView RankingView = new RankingView();
		
		// 종합 데이터
			if (count_a > 0 && count_b > 0 && count_c > 0) {
				RankingView = new RankingView(reqData_g.get(0), reqData_c.get(0), reqData_k.get(0));				
			}
			if (count_a > 0 && count_b > 0 && count_c == 0) {
				RankingView = new RankingView(reqData_g.get(0), reqData_c.get(0));				
			}
			if (count_a > 0 && count_b == 0 && count_c == 0) {
				RankingView = new RankingView(reqData_g.get(0));				
			}
			
			RankingViewList.add(RankingView);
		
		// 리턴 값
		resultMap.remove("_csrf");

		// 최종 프로세스
		ResponseDTO ResponseDTO = new ResponseDTO(date2, RankingViewList, resultMap, code);
		String dtoAsString = mapper.writeValueAsString(ResponseDTO);

		return dtoAsString;
	}
	// temp Code
	@RequestMapping(value = "/saving", method = RequestMethod.GET, produces = "application/json; charset=utf8")
	public @ResponseBody String saving() throws IOException, ParseException {
		
		// 기본 파라미터 세팅
		ObjectMapper mapper = JsonFn.setMapper();

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		Date startDate = formatter.parse("2016-10-01");
		Date endDate = formatter.parse("2017-04-10");
		
		LocalDate start = startDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
		LocalDate end = endDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

		for (LocalDate date = start; date.isBefore(end); date = date.plusDays(1)) {
			 
			String date2 = date.format(formatter2);
			String date_raw = date2.replace("-", "");
			
			// 본문 프로세스
			ArrayList<Data> reqData_g = DataDAO.getFeastByDate(date2, "FF14G_Ranking");
	        saveJsonToFiles(mapper, reqData_g, date_raw, "en");	
	        
			// 중국
			ArrayList<Data> reqData_c = DataDAO.getFeastByDate(date2, "FF14C_Ranking");
	        saveJsonToFiles(mapper, reqData_c, date_raw, "ch");		
	
			// 한국
			ArrayList<Data> reqData_k = DataDAO.getFeastByDate(date2, "FF14K_Ranking");
	        saveJsonToFiles(mapper, reqData_k, date_raw, "kr");		
		}		
        
		return "none";
	}

	private void saveJsonToFiles(ObjectMapper mapper, ArrayList<Data> reqData, String date, String type) throws IOException {
		String dtoAsString = "";
		try {
			// 최종 프로세스
			RankingView RankingView = new RankingView(reqData.get(0));
			dtoAsString = mapper.writeValueAsString(RankingView);
	        
		} catch (Exception e) {
			dtoAsString = "{}";
		}        
		FileWriter fileWriter = new FileWriter("c:\\feastdata\\" + type + "\\" + date + ".js");
        fileWriter.write(dtoAsString);
        fileWriter.close();
	}
}
