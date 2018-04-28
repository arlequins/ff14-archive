package com.setine.maria.service;

import com.setine.maria.model.FeastRankingSeason;

public interface FeastRankingSeasonService {

	void save(FeastRankingSeason FeastRankingSeason);

	FeastRankingSeason findByNationAndSeason(int nation, int season);

	FeastRankingSeason findByNationInCurrent(int nation);

}