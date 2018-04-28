package com.setine.maria.dao;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.setine.maria.model.FeastRankingSeason;

@Repository("FeastRankingSeasonDao")
public class FeastRankingSeasonImpl extends AbstractDao<Integer, FeastRankingSeason> implements FeastRankingSeasonDao {

	public void save(FeastRankingSeason FeastRankingSeason) {
		persist(FeastRankingSeason);
	}

	public FeastRankingSeason findByNationAndSeason(int nation, int season) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("nation", nation));
		crit.add(Restrictions.eq("season", season));
		return (FeastRankingSeason) crit.uniqueResult();
	}

	public FeastRankingSeason findByNationInCurrent(int nation) {
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("nation", nation));
		crit.add(Restrictions.eq("currentstatus", 1));
		return (FeastRankingSeason) crit.uniqueResult();
	}

}
