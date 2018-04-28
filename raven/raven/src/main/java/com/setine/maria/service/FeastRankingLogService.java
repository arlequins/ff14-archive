package com.setine.maria.service;

import java.util.ArrayList;

import com.setine.maria.model.FeastRankingLog;

public interface FeastRankingLogService {

	void save(FeastRankingLog FeastRankingLog);
	
	ArrayList<FeastRankingLog> findByStddate(String stddate);

}