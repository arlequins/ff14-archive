package com.setine.db.mongo.model.ranking;

public class Params {
	private CommonType rank_type;
	private SubType sub_type;
	private CommonType solo_party;
	private CommonType dcgroup;

	public Params(CommonType rankType, CommonType soloParty, CommonType dcGroup, SubType subType) {
		this.rank_type = rankType;
		this.sub_type = subType;
		this.solo_party = soloParty;
		this.dcgroup = dcGroup;
	}

	public CommonType getRank_type() {
		return rank_type;
	}

	public void setRank_type(CommonType rank_type) {
		this.rank_type = rank_type;
	}

	public SubType getSub_type() {
		return sub_type;
	}

	public void setSub_type(SubType sub_type) {
		this.sub_type = sub_type;
	}

	public CommonType getSolo_party() {
		return solo_party;
	}

	public void setSolo_party(CommonType solo_party) {
		this.solo_party = solo_party;
	}

	public CommonType getDcgroup() {
		return dcgroup;
	}

	public void setDcgroup(CommonType dcgroup) {
		this.dcgroup = dcgroup;
	}

}
