package com.setine.maria.dao;

import java.util.ArrayList;

import com.setine.maria.model.FeastRankingLog;

public interface FeastRankingLogDao {

	void save(FeastRankingLog FeastRankingLog);
	
	ArrayList<FeastRankingLog> findByStddate(String stddate);
	
}

