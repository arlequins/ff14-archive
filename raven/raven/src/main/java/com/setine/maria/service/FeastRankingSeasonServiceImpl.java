package com.setine.maria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.setine.maria.dao.FeastRankingSeasonDao;
import com.setine.maria.model.FeastRankingSeason;

@Service("FeastRankingSeasonService")
@Transactional
public class FeastRankingSeasonServiceImpl implements FeastRankingSeasonService {

	@Autowired
	private FeastRankingSeasonDao dao;

	public void save(FeastRankingSeason FeastRankingSeason) {
		dao.save(FeastRankingSeason);
	}

	public FeastRankingSeason findByNationAndSeason(int nation, int season) {
		return dao.findByNationAndSeason(nation, season);
	}

	public FeastRankingSeason findByNationInCurrent(int nation) {
		return dao.findByNationInCurrent(nation);
	}

}
