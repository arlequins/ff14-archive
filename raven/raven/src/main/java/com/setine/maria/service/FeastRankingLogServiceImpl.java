package com.setine.maria.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.setine.maria.dao.FeastRankingLogDao;
import com.setine.maria.model.FeastRankingLog;

@Service("FeastRankingLogService")
@Transactional
public class FeastRankingLogServiceImpl implements FeastRankingLogService{

	@Autowired
	private FeastRankingLogDao dao;
	
	public void save(FeastRankingLog FeastRankingLog){
		dao.save(FeastRankingLog);
	}
	
	public ArrayList<FeastRankingLog> findByStddate(String stddate) {
		return dao.findByStddate(stddate);
	}

}
