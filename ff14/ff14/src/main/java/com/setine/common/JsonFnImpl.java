package com.setine.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.setine.db.mongo.CrowDAO;
import com.setine.db.mongo.model.Crow;
import com.setine.db.mongo.model.NoticeArray;
import com.setine.dto.HomeDTO;

@Repository
public class JsonFnImpl implements JsonFn {
	@Autowired
	private ParsingFn parsingFn;
	@Autowired
	private CrowDAO crowDAO;

	@Override
	public HomeDTO getHomeData() throws JsonProcessingException {
		// 초기 시작
		HomeDTO HomeDTO = new HomeDTO();
		
		// 한국 파싱 부분
		Crow recentData = crowDAO.getRecentCrow("FF14KData");
		String FF14K = recentData.getData();
		HomeDTO = parsingFn.getKoreaData(FF14K);

		// 로드스톤 영어 부분
		String targete = "http://na.finalfantasyxiv.com/lodestone/";
		NoticeArray ffge = parsingFn.getLodestone_data(targete);

		// 로드스톤 영어 부분
		String targetj = "http://jp.finalfantasyxiv.com/lodestone/";
		NoticeArray ffgj = parsingFn.getLodestone_data(targetj);

		HomeDTO.setFfge(ffge);
		HomeDTO.setFfgj(ffgj);

		return HomeDTO;
	}
	@Override
	public ObjectMapper setMapper() {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);
		return mapper;
	}
}