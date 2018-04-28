package com.setine.maria.service;

import java.util.ArrayList;

import com.setine.maria.model.FeastRankingMember;

public interface FeastRankingMemberService {

	void save(FeastRankingMember FeastRankingMember);

	ArrayList<FeastRankingMember> findByWorldAndName(String world, String name);

	ArrayList<FeastRankingMember> findByName(String name);

	ArrayList<FeastRankingMember> findByWorld(String world);

}