package com.setine.maria.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.setine.maria.dao.FeastRankingDao;
import com.setine.maria.model.FeastRanking;

@Service("FeastRankingService")
@Transactional
public class FeastRankingServiceImpl implements FeastRankingService {

	@Autowired
	private FeastRankingDao dao;

	public void save(FeastRanking feastranking) {
		dao.save(feastranking);
	}

	public ArrayList<FeastRanking> findByNation(int nation) {
		return dao.findByNation(nation);
	}

	public ArrayList<FeastRanking> findByStddate(String stddate) {
		return dao.findByStddate(stddate);
	}

	public ArrayList<FeastRanking> findBySeason(int nation, String startDay, String endDay) {
		return dao.findBySeason(nation, startDay, endDay);
	}

	public ArrayList<FeastRanking> findByStddateAndNation(String stddate, int nation) {
		return dao.findByStddateAndNation(stddate, nation);
	}

	public ArrayList<FeastRanking> findByDetailInfo(int nation, String name, String world) {
		return dao.findByDetailInfo(nation, name, world);
	}
}
