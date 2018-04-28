package com.setine.db.mongo.model.ranking;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Feast {
	private String rank_type;
	private String solo_party;
	private String dcgroup;
	private List<FeastData> feastData;

	public Feast(String rank_type, String solo_party, String dcgroup, ArrayList<FeastData> feastData) {
		this.rank_type = rank_type;
		this.solo_party = solo_party;
		this.dcgroup = dcgroup;
		this.feastData = feastData;
	}

	public String getRank_type() {
		return rank_type;
	}

	public void setRank_type(String rank_type) {
		this.rank_type = rank_type;
	}

	public String getSolo_party() {
		return solo_party;
	}

	public void setSolo_party(String solo_party) {
		this.solo_party = solo_party;
	}

	public String getDcgroup() {
		return dcgroup;
	}

	public void setDcgroup(String dcgroup) {
		this.dcgroup = dcgroup;
	}

	public List<FeastData> getFeastData() {
		return feastData;
	}

	public void setFeastData(List<FeastData> feastData) {
		this.feastData = feastData;
	}

}
