package com.setine.maria.dao;

import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.common.Helper;
import com.setine.maria.model.FeastRankingMember;

@Repository("FeastRankingMemberDao")
public class FeastRankingMemberDaoImpl extends AbstractDao<Integer, FeastRankingMember>
		implements FeastRankingMemberDao {

	@Autowired
	private Helper Helper;
	
	public void save(FeastRankingMember FeastRankingMember) {
		persist(FeastRankingMember);
	}

	@SuppressWarnings("unchecked")
	public ArrayList<FeastRankingMember> findByWorldAndName(String world, String name) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("world", world));
		crit.add(Restrictions.like("name", Helper.getLikeKeyword(name)));
		return (ArrayList<FeastRankingMember>) crit.list();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<FeastRankingMember> findByName(String name) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.like("name", Helper.getLikeKeyword(name)));
		return (ArrayList<FeastRankingMember>) crit.list();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<FeastRankingMember> findByWorld(String world) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.like("world", world));
		return (ArrayList<FeastRankingMember>) crit.list();
	}
}
