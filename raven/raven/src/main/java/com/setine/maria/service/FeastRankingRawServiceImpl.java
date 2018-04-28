package com.setine.maria.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.setine.maria.dao.FeastRankingRawDao;
import com.setine.maria.model.FeastRankingRaw;

@Service("FeastRankingRawService")
@Transactional
public class FeastRankingRawServiceImpl implements FeastRankingRawService{

	@Autowired
	private FeastRankingRawDao dao;
	
	public void save(FeastRankingRaw FeastRankingRaw){
		dao.save(FeastRankingRaw);
	}
	
	public ArrayList<FeastRankingRaw> findByStddate(String stddate) {
		return dao.findByStddate(stddate);
	}

}
