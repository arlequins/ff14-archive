package com.setine.db.mongo.model.ranking;

import java.util.ArrayList;
import java.util.List;

public class CommonType {
	private String id;
	private List<String> name;

	public CommonType(String id,String[] rank_type) {
		ArrayList<String> data = new ArrayList<String>();
		for (int i = 0; i < rank_type.length; i++) {
			String target = rank_type[i];
			data.add(target);
		}
		this.id = id;
		this.name = data;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<String> getName() {
		return name;
	}

	public void setName(List<String> name) {
		this.name = name;
	}
}
