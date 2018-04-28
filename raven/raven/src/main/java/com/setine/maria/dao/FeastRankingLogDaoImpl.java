package com.setine.maria.dao;

import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.setine.maria.model.FeastRankingLog;

@Repository("FeastRankingLogDao")
public class FeastRankingLogDaoImpl extends AbstractDao<Integer, FeastRankingLog> implements FeastRankingLogDao {

	public void save(FeastRankingLog FeastRankingLog) {
		persist(FeastRankingLog);
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<FeastRankingLog> findByStddate(String stddate) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("stddate", stddate));
		return (ArrayList<FeastRankingLog>) crit.list();
	}

}
