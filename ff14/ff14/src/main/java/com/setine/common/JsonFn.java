package com.setine.common;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.dto.HomeDTO;

public interface JsonFn {

	HomeDTO getHomeData() throws JsonProcessingException;

	ObjectMapper setMapper();
}
