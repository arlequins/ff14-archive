package com.setine.maria.dao;

import java.util.ArrayList;

import com.setine.maria.model.FeastRanking;

public interface FeastRankingDao {

	void save(FeastRanking feastranking);

	ArrayList<FeastRanking> findByNation(int nation);

	ArrayList<FeastRanking> findByStddate(String stddate);

	ArrayList<FeastRanking> findBySeason(int nation, String startDay, String endDay);

	ArrayList<FeastRanking> findByStddateAndNation(String stddate, int nation);

	ArrayList<FeastRanking> findByDetailInfo(int nation, String name, String world);

}
