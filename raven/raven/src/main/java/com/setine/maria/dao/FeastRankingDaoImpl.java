package com.setine.maria.dao;

import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.setine.maria.model.FeastRanking;

@Repository("FeastRankingDao")
public class FeastRankingDaoImpl extends AbstractDao<Integer, FeastRanking> implements FeastRankingDao {

	public void save(FeastRanking feastranking) {
		persist(feastranking);
	}

	@SuppressWarnings("unchecked")
	public ArrayList<FeastRanking> findByNation(int nation) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("nation", nation));
		crit.add(Restrictions.eq("solo_party", 0));
		crit.add(Restrictions.eq("rank_type", 0));
		return (ArrayList<FeastRanking>) crit.list();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<FeastRanking> findByStddate(String stddate) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("stddate", stddate));
		crit.add(Restrictions.eq("solo_party", 0));
		crit.add(Restrictions.eq("ranktype", 0));		
		return (ArrayList<FeastRanking>) crit.list();
	}
	@SuppressWarnings("unchecked")
	public ArrayList<FeastRanking> findBySeason(int nation, String startDay, String endDay) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("nation", nation));
		crit.add(Restrictions.ge("stddate", startDay));
		crit.add(Restrictions.le("stddate", endDay));
		crit.add(Restrictions.eq("solo_party", 0));
		crit.add(Restrictions.eq("ranktype", 0));		
		return (ArrayList<FeastRanking>) crit.list();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<FeastRanking> findByStddateAndNation(String stddate, int nation) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("stddate", stddate));
		crit.add(Restrictions.eq("solo_party", 0));
		crit.add(Restrictions.eq("ranktype", 0));		
		crit.add(Restrictions.eq("nation", nation));
		return (ArrayList<FeastRanking>) crit.list();
	}

	@SuppressWarnings("unchecked")
	public ArrayList<FeastRanking> findByDetailInfo(int nation, String name, String world) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("nation", nation));
		crit.add(Restrictions.eq("solo_party", 0));
		crit.add(Restrictions.eq("ranktype", 0));		
		crit.add(Restrictions.eq("world", world));
		crit.add(Restrictions.like("name", name));
		return (ArrayList<FeastRanking>) crit.list();
	}

}
