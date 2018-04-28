package com.setine.common;

import java.io.IOException;
import java.util.ArrayList;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.db.mongo.CrowDAO;
import com.setine.db.mongo.model.Crow;
import com.setine.db.mongo.model.FFKorea;
import com.setine.db.mongo.model.Module;
import com.setine.db.mongo.model.Notice;
import com.setine.db.mongo.model.NoticeArray;
import com.setine.dto.HomeDTO;

@Repository
public class ParsingFnImpl implements ParsingFn {


	@Autowired
	private CrowDAO crowDAO;

	@Override
	public FFKorea getJSONdata(String data_list) {
		// // 메인 능력치 및 추가 능력치, 마테리아, 고유여부 json으로 넣기
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
	public HomeDTO getKoreaData(String FF14K) {
		ArrayList<Module> Kbanner = new ArrayList<Module>();
		ArrayList<Module> KImage = new ArrayList<Module>();

		FFKorea FFKorea = FFKorea_parsing1(FF14K);

		for (int i = 0; i < FFKorea.getModules().getModule().size(); i++) {
			int module_area = FFKorea.getModules().getModule().get(i).getAreaid();
			if (module_area == 17) {
				Module Module = FFKorea.getModules().getModule().get(i);
				String thumb = Module.getThumbnail().replaceAll("%2F", "/");
				String adr = Module.getActionscript().replaceAll("%2F", "/");
				;
				Module.setThumbnail(thumb);
				Module.setActionscript(adr);
				Kbanner.add(Module);
			}
			if (module_area == 20) {
				Module Module = FFKorea.getModules().getModule().get(i);
				String thumb = Module.getThumbnail().replaceAll("%2F", "/");
				String adr = Module.getActionscript().replaceAll("%2F", "/");
				;
				Module.setThumbnail(thumb);
				Module.setActionscript(adr);
				KImage.add(Module);
			}
			if (module_area == 24) {
				Module Module = FFKorea.getModules().getModule().get(i);
				String thumb = Module.getThumbnail().replaceAll("%2F", "/");
				String adr = Module.getActionscript().replaceAll("%2F", "/");
				;
				Module.setThumbnail(thumb);
				Module.setActionscript(adr);
				KImage.add(Module);
			}
		}
		ArrayList<Notice> NoticeList = KoreaBanner(KImage);
		HomeDTO HomeDTO = new HomeDTO(NoticeList, Kbanner,KImage);
		return HomeDTO;
	}

	@Override
	public NoticeArray getLodestone_data(String target) {
		Document doc;
		NoticeArray FFG = new NoticeArray();

		String lang;
		int type;
		if (target.contains("na.")) {
			lang = "FF14GData_e";
			type = 1;
		} else {
			lang = "FF14GData_j";
			type = 2;
		}
		
		Crow recentData = crowDAO.getRecentCrow(lang);
		String target_data= recentData.getData();
		
		doc = Jsoup.parse(target_data);

		FFG = setOnOffdata(doc, type);
		// }
		return FFG;
	}

	public NoticeArray setOnOffdata(Document doc, int type) {
		ArrayList<Notice> article = new ArrayList<Notice>();
		ArrayList<Notice> banner = new ArrayList<Notice>();
		ArrayList<Notice> topic = new ArrayList<Notice>();
		Notice topBanner = new Notice();
		NoticeArray FFG = new NoticeArray();

		// get all links
		Elements links = doc.select("#slider");
 		Elements links2 = links.select("li");

		for (int i = 0; i < links2.size(); i++) {
			// get the value from href attribute
			Notice Notice = new Notice();
			Notice.setLink(links2.get(i).select("a[href]").attr("href"));
			Notice.setLink_content(links2.get(i).select("a[href]").select("img").attr("src"), 0);				
			banner.add(Notice);
		}

		// Article 부분
		Elements linksa = doc.select("#toptabchanger_newsarea");
		Elements links2a = linksa.select("li");

		for (Element link : links2a) {
			// get the value from href attribute
			Notice Notice = new Notice();
			Notice.setLink(link.select("a[href]").attr("href"));
			Notice.setLink_content(link.select("a[href]").text(), 1);
			article.add(Notice);
		}

		// Topic 부분
		Elements linksb = doc.select(".news__list--topics_top");
		Elements links2b = linksb.select("li");

		for (Element link : links2b) {
			// get the value from href attribute
			Notice Notice = new Notice();
			Notice.setLink(link.select("li").select("header").select("a[href]").attr("href"));
			Notice.setLink_text(link.select("li").select("header").select("a[href]").text());
			Notice.setLink_content(link.select("li").select("div").select("a[href]").select("img").attr("src"), 0);

			topic.add(Notice);
		}

		// 상단 배너 부분 
		Elements header = doc.select("header.l__header");
		Elements headerData = header.select("div.l__header__inner");
		String rawImage_url = headerData.first().attr("style");
		
		String image_url = rawImage_url.substring( rawImage_url.indexOf("http://"), rawImage_url.indexOf(")"));
		String banner_url = headerData.select("a[href]").select(".l__header__link_management").first().attr("href");
		topBanner.setLink_content(banner_url, 0);
		topBanner.setLink(image_url);
		
		FFG.setBanner(banner);
		FFG.setArticle(article);
		FFG.setTopic(topic);
		FFG.setTopBanner(topBanner);
		
		return FFG;
	}

	public ArrayList<Notice> KoreaBanner(ArrayList<Module> kImage) {
		// Korean 공지사항 부분
		Crow recentData = crowDAO.getRecentCrow("FF14KData_Notice");
		String target = recentData.getData();		
		
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
		return NoticeList;
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
}