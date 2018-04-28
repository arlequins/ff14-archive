package com.setine.maria.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.setine.maria.dao.FeastRankingMemberDao;
import com.setine.maria.model.FeastRankingMember;

@Service("FeastRankingMemberService")
@Transactional
public class FeastRankingMemberServiceImpl implements FeastRankingMemberService {

	@Autowired
	private FeastRankingMemberDao dao;

	public void save(FeastRankingMember FeastRankingMember) {
		dao.save(FeastRankingMember);
	}

	public ArrayList<FeastRankingMember> findByWorldAndName(String world, String name) {
		return dao.findByWorldAndName(world, name);
	}

	public ArrayList<FeastRankingMember> findByName(String name) {
		return dao.findByName(name);
	}

	public ArrayList<FeastRankingMember> findByWorld(String world) {
		return dao.findByWorld(world);
	}

}
