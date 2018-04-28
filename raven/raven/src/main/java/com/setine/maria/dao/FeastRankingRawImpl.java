package com.setine.maria.dao;

import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.setine.maria.model.FeastRankingRaw;

@Repository("FeastRankingRawDao")
public class FeastRankingRawImpl extends AbstractDao<Integer, FeastRankingRaw> implements FeastRankingRawDao {

	public void save(FeastRankingRaw FeastRankingRaw) {
		persist(FeastRankingRaw);
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<FeastRankingRaw> findByStddate(String stddate) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("stddate", stddate));
		return (ArrayList<FeastRankingRaw>) crit.list();
	}

}
