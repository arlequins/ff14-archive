package com.setine.db.mongo.model.ranking;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Dead {

	private String sub_type;
	private String sub_type_name;
	private String solo_party;
	private String dcgroup;
	private List<DeadData> DeadData;

	public Dead(String sub_type, String sub_type_name, String solo_party, String dcgroup, ArrayList<DeadData> DeadData) {
		this.sub_type = sub_type;
		this.sub_type_name = sub_type_name;
		this.solo_party = solo_party;
		this.dcgroup = dcgroup;
		this.DeadData = DeadData;
	}

	public String getSub_type() {
		return sub_type;
	}

	public void setSub_type(String sub_type) {
		this.sub_type = sub_type;
	}

	public String getSub_type_name() {
		return sub_type_name;
	}

	public void setSub_type_name(String sub_type_name) {
		this.sub_type_name = sub_type_name;
	}

	public List<DeadData> getDeadData() {
		return DeadData;
	}

	public void setDeadData(List<DeadData> deadData) {
		DeadData = deadData;
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

}
