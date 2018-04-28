
package com.setine.Controller;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.setine.common.CommonFn;
import com.setine.common.Helper;
import com.setine.common.object.FeastExport;
import com.setine.common.object.Result;
import com.setine.maria.model.FeastRankingMember;
import com.setine.maria.model.FeastRankingSeason;
import com.setine.maria.service.FeastRankingMemberService;
import com.setine.maria.service.FeastRankingSeasonService;
import com.setine.maria.service.FeastRankingService;

@Controller
public class WebController {

	@Autowired
	private CommonFn CommonFn;
	@Autowired
	private Helper Helper;
	@Autowired
	private FeastRankingSeasonService FeastRankingSeasonService;
	@Autowired
	private FeastRankingService FeastRankingService;
	@Autowired
	private FeastRankingMemberService FeastRankingMemberService;
	String badRequest = "bad request";

	@ResponseBody
	@RequestMapping(value = "/season", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public String searchBySeason(HttpServletRequest request) throws IOException, ParseException {
		String rawSeason = request.getParameter("season");
		String rawNation = request.getParameter("nation");

		int checkSeason = Helper.checkValidInteger(rawSeason);
		int checkNation = Helper.checkValidInteger(rawNation);

		FeastRankingSeason FeastRankingSeason = new FeastRankingSeason();

		if (checkSeason == -1) {
			FeastRankingSeason = FeastRankingSeasonService.findByNationInCurrent(checkNation);
		} else {
			FeastRankingSeason = FeastRankingSeasonService.findByNationAndSeason(checkNation, checkSeason);
		}

		String reqResult = "";
		if (FeastRankingSeason == null) {
			reqResult = badRequest;
		} else {
			if (FeastRankingSeason.getCurrentstatus() == 1) {
				FeastRankingSeason.setEndday(Helper.setToday());
			}
		}

		// main processing
		if (!reqResult.equals(badRequest)) {
			String startDay = FeastRankingSeason.getStartday();
			String endDay = FeastRankingSeason.getEndday();

			ArrayList<FeastExport> dataList = Helper
					.setExportData(FeastRankingService.findBySeason(checkNation, startDay, endDay));
			return CommonFn.setJsonObject(new Result(1, null, dataList, 1, FeastRankingSeason));
		} else {
			return CommonFn.setJsonObject(new Result(-1, badRequest, null, 1, FeastRankingSeason));
		}
	}

	@ResponseBody
	@RequestMapping(value = "/date", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public String searchByDate(HttpServletRequest request) throws IOException, ParseException {
		String rawDateYear = request.getParameter("year");
		String rawDateMonth = request.getParameter("month");
		String rawDateDay = request.getParameter("day");

		// main processing
		String reqResult = CommonFn.setDate(rawDateYear, rawDateMonth, rawDateDay);
		if (!reqResult.equals(badRequest)) {
			ArrayList<FeastExport> dataList = Helper.setExportData(FeastRankingService.findByStddate(reqResult));
			return CommonFn.setJsonObject(new Result(1, null, dataList, 1, null));
		} else {
			return CommonFn.setJsonObject(new Result(-1, badRequest, null, 1, null));
		}
	}

	@ResponseBody
	@RequestMapping(value = "/name", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public String searchByUser(HttpServletRequest request) throws IOException, ParseException {
		String reqName = request.getParameter("name");

		// main processing
		String reqResult = Helper.checkValidString(reqName);
		if (!reqResult.equals(badRequest)) {
			ArrayList<FeastRankingMember> dataList = FeastRankingMemberService.findByName(reqResult);
			dataList = Helper.setFindMemberRank(dataList);
			return CommonFn.setJsonObject(new Result(1, null, dataList, 2, null));
		} else {
			return CommonFn.setJsonObject(new Result(-1, badRequest, null, 2, null));
		}
	}

	@ResponseBody
	@RequestMapping(value = "/world", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public String searchByWorld(HttpServletRequest request) throws IOException, ParseException {
		String reqWorld = request.getParameter("world");

		// main processing
		String reqResult = Helper.checkValidString(reqWorld);
		if (!reqResult.equals(badRequest)) {
			ArrayList<FeastRankingMember> dataList = FeastRankingMemberService.findByWorld(reqResult);
			dataList = Helper.setFindMemberRank(dataList);
			return CommonFn.setJsonObject(new Result(1, null, dataList, 2, null));
		} else {
			return CommonFn.setJsonObject(new Result(-1, badRequest, null, 2, null));
		}
	}

	@ResponseBody
	@RequestMapping(value = "/nameAndWorld", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public String searchByNameAndWorld(HttpServletRequest request) throws IOException, ParseException {
		String reqWorld = request.getParameter("world");
		String reqName = request.getParameter("name");

		// main processing
		String reqResultName = Helper.checkValidString(reqName);
		String reqResultWorld = Helper.checkValidString(reqWorld);
		if (!reqResultName.equals(badRequest) && !reqResultWorld.equals(badRequest)) {
			ArrayList<FeastRankingMember> dataList = FeastRankingMemberService.findByWorldAndName(reqResultWorld,
					reqResultName);
			dataList = Helper.setFindMemberRank(dataList);
			return CommonFn.setJsonObject(new Result(1, null, dataList, 2, null));
		} else {
			return CommonFn.setJsonObject(new Result(-1, badRequest, null, 2, null));
		}
	}

	@ResponseBody
	@RequestMapping(value = "/total", method = RequestMethod.POST, produces = "application/json; charset=utf8")
	public String searchByAllCondition(HttpServletRequest request) throws IOException, ParseException {
		String rawDateYear = request.getParameter("year");
		String rawDateMonth = request.getParameter("month");
		String rawDateDay = request.getParameter("day");
		String reqName = request.getParameter("name");
		String reqWorld = request.getParameter("world");
		String reqNation = request.getParameter("nation");

		// main processing
		String checkDate = CommonFn.setDate(rawDateYear, rawDateMonth, rawDateDay);
		String checkName = Helper.checkValidString(reqName);
		String checkWorld = Helper.checkValidString(reqWorld);
		int checkNation = Helper.checkValidInteger(reqNation);

		int totalResult = 0;
		ArrayList<FeastExport> dataRankList = new ArrayList<FeastExport>();
		ArrayList<FeastRankingMember> dataMemberList = new ArrayList<FeastRankingMember>();

		if (checkDate.equals(badRequest) && checkName.equals(badRequest) && checkWorld.equals(badRequest)
				&& checkNation == -1) {
			totalResult = -1;
			return CommonFn.setJsonObject(new Result(totalResult, badRequest, null, 1, null));
		} else {
			if (!checkDate.equals(badRequest) && checkNation != -1) {
				totalResult += 1;
				ArrayList<FeastExport> dataList = Helper
						.setExportData(FeastRankingService.findByStddateAndNation(checkDate, checkNation));
				for (int i = 0; i < dataList.size(); i++)
					dataRankList.add(dataList.get(i));
			} else if (!checkDate.equals(badRequest)) {
				totalResult += 2;
				ArrayList<FeastExport> dataList = Helper.setExportData(FeastRankingService.findByStddate(checkDate));
				for (int i = 0; i < dataList.size(); i++)
					dataRankList.add(dataList.get(i));
			}

			if (!checkName.equals(badRequest) && !checkWorld.equals(badRequest)) {
				totalResult += 1100;
				ArrayList<FeastRankingMember> dataList = FeastRankingMemberService.findByWorldAndName(checkWorld,
						checkName);
				dataList = Helper.setFindMemberRank(dataList);
				for (int i = 0; i < dataList.size(); i++)
					dataMemberList.add(dataList.get(i));
			} else if (!checkName.equals(badRequest)) {
				totalResult += 1200;
				ArrayList<FeastRankingMember> dataList = FeastRankingMemberService.findByName(checkName);
				dataList = Helper.setFindMemberRank(dataList);
				for (int i = 0; i < dataList.size(); i++)
					dataMemberList.add(dataList.get(i));
			} else if (!checkWorld.equals(badRequest)) {
				totalResult += 1300;
				ArrayList<FeastRankingMember> dataList = FeastRankingMemberService.findByWorld(checkWorld);
				dataList = Helper.setFindMemberRank(dataList);
				for (int i = 0; i < dataList.size(); i++)
					dataMemberList.add(dataList.get(i));
			}
			return CommonFn.setJsonObject(new Result(totalResult, dataRankList, dataMemberList, null));
		}
	}
}