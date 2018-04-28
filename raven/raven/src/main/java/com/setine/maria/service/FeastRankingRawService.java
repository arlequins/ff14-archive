package com.setine.maria.service;

import java.util.ArrayList;

import com.setine.maria.model.FeastRankingRaw;

public interface FeastRankingRawService {

	void save(FeastRankingRaw FeastRankingRaw);
	
	ArrayList<FeastRankingRaw> findByStddate(String stddate);

}