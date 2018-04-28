package com.setine.maria.dao;

import java.util.ArrayList;

import com.setine.maria.model.FeastRankingRaw;

public interface FeastRankingRawDao {

	void save(FeastRankingRaw FeastRankingRaw);
	
	ArrayList<FeastRankingRaw> findByStddate(String stddate);
	
}

