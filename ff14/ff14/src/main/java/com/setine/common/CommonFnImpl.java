package com.setine.common;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.db.mongo.TopBannerDAO;
import com.setine.db.mongo.model.Crow;
import com.setine.db.mongo.model.FFKorea;
import com.setine.db.mongo.model.Language;
import com.setine.db.mongo.model.Module;
import com.setine.db.mongo.model.NavData;
import com.setine.db.mongo.model.Notice;
import com.setine.db.mongo.model.TopBanner;
import com.setine.db.mongo.CrowDAO;

@Repository
public class CommonFnImpl implements CommonFn {

	@Autowired
	private CrowDAO crowDAO;
	@Autowired
	private TopBannerDAO TopBannerDAO;


	@Override
	public ArrayList<NavData> setHomeNavData() {
		ArrayList<NavData> navData = new ArrayList<NavData>();

		String home = "/,HOME";
		String link = home.split(",")[0];
		String text = home.split(",")[1];
		navData.add(new NavData(link, text));

		return navData;
	}

	@Override
	public NavData setNavData(String data) {
		String link = data.split(",")[0];
		String text = data.split(",")[1];
		return new NavData(link, text);
	}


	public void KoreaBanner(ArrayList<Module> kImage, ModelAndView result) {
		// Korean 공지사항 부분
		ArrayList<Crow> allData = crowDAO.getCrows("FF14KData_Notice");
		String target = crowDAO.getCrow(allData.size()-1, "FF14KData_Notice").getData();

		ArrayList<Notice> NoticeList = new ArrayList<Notice>();

		Document doc;
		// need http protocol
		doc = Jsoup.parse(target);

		// get all links
		Elements links = doc.select("a[href]");
		for (Element link : links) {
			// get the value from href attribute
			Notice Notice = new Notice();
			Notice.setLink(link.attr("href"));
			Notice.setLink_content(link.text(), 1);
			NoticeList.add(Notice);
		}
		result.addObject("noticeList", NoticeList);

	}

	public FFKorea FFKorea_parsing1(String data_list) {
		ObjectMapper mapper = new ObjectMapper(); // create once, reuse
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		FFKorea value = new FFKorea();
		try {
			value = mapper.readValue(data_list, FFKorea.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return value;
	}

	@Override
	public String checking_textshort(String title_name) {
		int title_count = title_name.length();
		String Session_name;
		if (title_count > 10) {
			Session_name = title_name.substring(0, 10) + "..";
		} else {
			Session_name = title_name;
		}
		return Session_name;
	}

	@Override
	public String checkVDQuestion(String question) {
		String question_text = "";
		try {
			if (question.length() > 0) {
				question_text = question.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "").replaceAll("[^\uAC00-\uD7A3xfe0-9a-zA-Z\\s]", "").trim();
			} else {
				question_text = "";
			}
		} catch (Exception e) {
			question_text = "";
		}
		return question_text;
	}

	@Override
	public int setToInt(String input) {
		int value;
		value = Integer.parseInt(input);
		return value;
	}

	@Override
	public int checkVDInt(String parameter, int default_value) {
		int int_value;
		try {
			int_value = Integer.parseInt(parameter);
		} catch (Exception e) {
			int_value = default_value;
		}
		return int_value;
	}

	@Override
	public float checkVDFloat(String parameter, int default_value) {
		float int_value;
		try {
			int_value = Float.parseFloat(parameter);
		} catch (Exception e) {
			int_value = default_value;
		}
		return int_value;
	}


	@Override
	public void setDefaultSetting(ModelMap model, Language language, String target, String targetName) {
		// 기본 설정
		String siteName = language.getText().getProperty("common.site.name");
		String dwblank = language.getText().getProperty("common.text.blank");
		model.addAttribute("language_code", language.getLanguage_code());

		// 매핑 설정
		String title;
		if (targetName.length() > 1) {
			title = targetName + dwblank + siteName;
		} else {
			title = siteName;
		}

		// 상단 배너 설정 
		ArrayList<TopBanner> TB_list = setTopBanner();
		
		model.addAttribute("TB_list", TB_list);		
		model.addAttribute("target", target);
		model.addAttribute("title", title);
		model.addAttribute("targetName", targetName);
	}

	@Override
	public void setDefaultSettingbyQuestion(ModelMap model, Language language, String target, String targetName, String question_raw) {
		// 기본 설정
		String siteName = language.getText().getProperty("common.site.name");
		String dwblank = language.getText().getProperty("common.text.blank");
		model.addAttribute("language_code", language.getLanguage_code());

		// 매핑 설정
		String title;
		if (targetName.length() > 1) {
			try {
				int checking = question_raw.length();
				if (checking > 1) {
					title = question_raw + dwblank + targetName + dwblank + siteName;
				} else {
					title = targetName + dwblank + siteName;
				}
			} catch (Exception e) {
				title = targetName + dwblank + siteName;
			}
		} else {
			title = siteName;
		}

		// 상단 배너 설정 
		ArrayList<TopBanner> TB_list = setTopBanner();
		
		model.addAttribute("TB_list", TB_list);
		model.addAttribute("target", target);
		model.addAttribute("title", title);
		model.addAttribute("targetName", targetName);
	}

	@Override
	public Language setLanguageData(Properties text_kr, Properties text_en, Properties text_jp, String serverName) {
		Language Language = new Language();

		// setDefault Values
		String language_code = "kr";
		Properties text = text_kr;

		if (serverName.contains("kr.")) {
			language_code = "kr";
			text = text_kr;
		} else if (serverName.contains("en.")) {
			language_code = "en";
			text = text_en;

		} else if (serverName.contains("jp.")) {
			language_code = "jp";
			text = text_jp;
		}

		Language.setLanguage_code(language_code);
		Language.setText(text);

		return Language;
	}

	@Override	
	public Map<String, Object> setRequestData(ObjectMapper mapper, String data) throws JsonParseException, JsonMappingException, IOException {
		Map<String, Object> map = new HashMap<String, Object>();

		// convert JSON string to Map
		map = mapper.readValue(data, new TypeReference<Map<String, String>>(){});
		return map;
	}
	
	private ArrayList<TopBanner> setTopBanner() {
		ArrayList<TopBanner> TB_list = new ArrayList<TopBanner>();
		TopBanner TBE_list = TopBannerDAO.getTopBanner(-1, "key", "FF14G_TB");
		TopBanner TBJ_list = TopBannerDAO.getTopBanner(-1, "key", "FF14G_TB");
		TB_list.add(TBE_list);
		TB_list.add(TBJ_list);
		return TB_list;
	}
	
}