package com.setine.db.mongo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Modules {
	private List<Module> Module;

	@JsonProperty("MODULE")
	public List<Module> getModule() {
		return Module;
	}

	@JsonProperty("MODULE")
	public void setModule(List<Module> module) {
		Module = module;
	}

}
