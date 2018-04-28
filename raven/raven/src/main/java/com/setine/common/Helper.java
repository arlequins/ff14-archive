package com.setine.common;

import java.util.ArrayList;

import com.setine.common.object.FeastExport;
import com.setine.maria.model.FeastRanking;
import com.setine.maria.model.FeastRankingMember;

public interface Helper {

	int checkValidInteger(String request);

	String setRequestDate(int year, int month, int day);

	String checkValidString(String request);

	String getLikeKeyword(String text);

	String setToday();

	ArrayList<FeastExport> setExportData(ArrayList<FeastRanking> data);

	ArrayList<FeastRankingMember> setFindMemberRank(ArrayList<FeastRankingMember> dataList);
}