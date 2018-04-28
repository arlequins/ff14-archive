package com.setine.maria.dao;

import java.util.ArrayList;

import com.setine.maria.model.FeastRankingMember;

public interface FeastRankingMemberDao {

	void save(FeastRankingMember FeastRankingMember);

	ArrayList<FeastRankingMember> findByWorldAndName(String world, String name);

	ArrayList<FeastRankingMember> findByName(String name);

	ArrayList<FeastRankingMember> findByWorld(String world);

}
