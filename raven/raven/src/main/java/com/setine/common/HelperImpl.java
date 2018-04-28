package com.setine.common;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.common.object.FeastExport;
import com.setine.maria.model.FeastRanking;
import com.setine.maria.model.FeastRankingMember;
import com.setine.maria.service.FeastRankingService;

@Repository
public class HelperImpl implements Helper {

	@Autowired
	private FeastRankingService FeastRankingService;
	
	@Override
	public int checkValidInteger(String request) {
		int result = 0;
		try {
			result = Integer.parseInt(request);
		} catch (Exception e) {
			result = -1;
		}
		return result;
	}

	@Override
	public String setRequestDate(int year, int month, int day) {
		String result = "";
		result += year;
		result += String.format("%02d", month);
		result += String.format("%02d", day);
		return result;
	}	

	@Override
	public String checkValidString(String request) {
		String result = "";
		String badReqeust = "bad request";
		try {
			if (request.length() > 0) {
				result = request;
			} else {
				result = badReqeust;
			}
		} catch (Exception e) {
			result = badReqeust;
		}
		return result;
	}
	@Override
	public String getLikeKeyword(String text) {
		return "%" + text + "%";
	}
	
	@Override
	public String setToday() {
		Date startDate = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
		String today = formatter.format(startDate);
		return today;
	}
	
	@Override
	public ArrayList<FeastExport> setExportData(ArrayList<FeastRanking> data) {
		ArrayList<com.setine.common.object.FeastExport> result = new ArrayList<FeastExport>();
		for (int i = 0; i < data.size(); i++) {
			FeastExport feastExport = new FeastExport(data.get(i));
			result.add(feastExport);
		}
		return result;
	}
	@Override
	public ArrayList<FeastRankingMember> setFindMemberRank(ArrayList<FeastRankingMember> dataList) {
		for (int i = 0; i < dataList.size(); i++) {
			String findName = dataList.get(i).getName();
			String findWorld = dataList.get(i).getWorld();
			int findNation = dataList.get(i).getNation();
			ArrayList<FeastRanking> dataRankList = FeastRankingService.findByDetailInfo(findNation, findName,
					findWorld);
			dataList.get(i).setRankList(setExportData(dataRankList));
		}
		return dataList;
	}
}
