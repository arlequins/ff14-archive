package com.setine.mybatis.db.achievement;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

@Repository
public class AchievementDAOService implements AchievementDAO {

	@Autowired
	@Resource(name="sqlSession_db")
	private SqlSession sqlSession;

	@Override
	public ArrayList<Total> getAchievementList(Params params) {
		ArrayList<Total> result = new ArrayList<Total>();
		AchievementMapper AchievementMapper = sqlSession.getMapper(AchievementMapper.class);
		result = AchievementMapper.getList(params);
		return result;
	}
}
