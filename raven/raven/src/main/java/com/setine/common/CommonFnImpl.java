package com.setine.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Repository
public class CommonFnImpl implements CommonFn {

	@Autowired
	private Helper Helper;
	
	@Override
	public String setJsonObject(Object object) throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		return mapper.writeValueAsString(object);
	}
	@Override
	public String setDate(String rawDate_y, String rawDate_m, String rawDate_d) {
		int year = Helper.checkValidInteger(rawDate_y);
		int month = Helper.checkValidInteger(rawDate_m);
		int day = Helper.checkValidInteger(rawDate_d);

		if (year != -1 && month != -1 && day != -1) {
			return Helper.setRequestDate(year, month, day);
		} else {
			return "bad request";
		}
	}
}
