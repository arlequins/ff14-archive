package com.setine.common;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.Properties;

import org.springframework.ui.ModelMap;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.db.mongo.model.Language;
import com.setine.db.mongo.model.NavData;

public interface CommonFn {

	String checking_textshort(String title_name);

	String checkVDQuestion(String question);

	int setToInt(String input);

	int checkVDInt(String parameter, int default_value);

	float checkVDFloat(String parameter, int default_value);

	ArrayList<NavData> setHomeNavData();

	Language setLanguageData(Properties text_kr, Properties text_en, Properties text_jp, String serverName);

	void setDefaultSetting(ModelMap model, Language language, String target, String targetName);

	void setDefaultSettingbyQuestion(ModelMap model, Language language, String target, String targetName, String question_raw);

	NavData setNavData(String data);

	Map<String, Object> setRequestData(ObjectMapper mapper, String data) throws JsonParseException, JsonMappingException, IOException;

}
