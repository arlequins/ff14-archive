package com.setine.db.mongo.model.ranking;

import java.util.ArrayList;
import java.util.List;

public class SubType {
	private String id;
	private List<String> type;
	private List<String> name;

	public SubType(String id, String[] sub_type, String[] sub_type_name) {
		ArrayList<String> data1 = new ArrayList<String>();
		ArrayList<String> data2 = new ArrayList<String>();
		for (int i = 0; i < sub_type.length; i++) {
			String target = sub_type[i];
			data1.add(target);
		}
		for (int i = 0; i < sub_type_name.length; i++) {
			String target = sub_type_name[i];
			data2.add(target);
		}
		this.id = id;
		this.name = data1;
		this.type = data2;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<String> getType() {
		return type;
	}

	public void setType(List<String> type) {
		this.type = type;
	}

	public List<String> getName() {
		return name;
	}

	public void setName(List<String> name) {
		this.name = name;
	}

}
