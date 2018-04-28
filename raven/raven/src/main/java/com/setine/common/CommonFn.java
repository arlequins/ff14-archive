package com.setine.common;

import com.fasterxml.jackson.core.JsonProcessingException;

public interface CommonFn {

	String setJsonObject(Object object) throws JsonProcessingException;

	String setDate(String rawDate_y, String rawDate_m, String rawDate_d);

}