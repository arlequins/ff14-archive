package com.setine.maria.dao;

import com.setine.maria.model.FeastRankingSeason;

public interface FeastRankingSeasonDao {

	void save(FeastRankingSeason FeastRankingSeason);

	FeastRankingSeason findByNationAndSeason(int nation, int season);

	FeastRankingSeason findByNationInCurrent(int nation);

}
