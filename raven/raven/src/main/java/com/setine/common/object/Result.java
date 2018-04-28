package com.setine.common.object;

import java.util.ArrayList;

import com.setine.maria.model.FeastRankingLog;
import com.setine.maria.model.FeastRankingMember;
import com.setine.maria.model.FeastRankingRaw;
import com.setine.maria.model.FeastRankingSeason;

public class Result {
	private int code;
	private String result;
	private ArrayList<FeastExport> rank;
	private ArrayList<FeastRankingLog> log;
	private ArrayList<FeastRankingMember> member;
	private ArrayList<FeastRankingRaw> raw;
	private FeastRankingSeason index;

	@SuppressWarnings("unchecked")
	public Result(int code, String result, ArrayList<?> dataList, int type, FeastRankingSeason index) {
		this.code = code;

		if (code != -1) {
			switch (type) {
			case 1:
				this.rank = (ArrayList<FeastExport>) dataList;
				this.index = index;
				break;
			case 2:
				this.member = (ArrayList<FeastRankingMember>) dataList;
				break;
			case 3:
				this.log = (ArrayList<FeastRankingLog>) dataList;
				break;
			case 4:
				this.raw = (ArrayList<FeastRankingRaw>) dataList;
				break;
			}
		} else {
			this.result = result;
		}
	}

	public Result(int code, ArrayList<FeastExport> dataRankList, ArrayList<FeastRankingMember> dataMemberList,
			FeastRankingSeason index) {
		this.code = code;
		this.index = index;
		this.rank = dataRankList;
		this.member = dataMemberList;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public ArrayList<FeastExport> getRank() {
		return rank;
	}

	public void setRank(ArrayList<FeastExport> rank) {
		this.rank = rank;
	}

	public ArrayList<FeastRankingLog> getLog() {
		return log;
	}

	public void setLog(ArrayList<FeastRankingLog> log) {
		this.log = log;
	}

	public ArrayList<FeastRankingMember> getMember() {
		return member;
	}

	public void setMember(ArrayList<FeastRankingMember> member) {
		this.member = member;
	}

	public ArrayList<FeastRankingRaw> getRaw() {
		return raw;
	}

	public void setRaw(ArrayList<FeastRankingRaw> raw) {
		this.raw = raw;
	}

	public FeastRankingSeason getIndex() {
		return index;
	}

	public void setIndex(FeastRankingSeason index) {
		this.index = index;
	}
}
