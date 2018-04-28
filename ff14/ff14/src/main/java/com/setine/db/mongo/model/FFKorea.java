package com.setine.db.mongo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FFKorea {
	private int count;
	private Modules modules;

	@JsonProperty("TOTALCOUNT")
	public int getCount() {
		return count;
	}

	@JsonProperty("TOTALCOUNT")
	public void setCount(int count) {
		this.count = count;
	}

	@JsonProperty("MODULES")
	public Modules getModules() {
		return modules;
	}

	@JsonProperty("MODULES")
	public void setModules(Modules modules) {
		this.modules = modules;
	}
}
