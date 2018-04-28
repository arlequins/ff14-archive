package com.setine.mybatis.db.npc;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;

@Repository
public class NpcDAOService implements NpcDAO {

	@Autowired
	@Resource(name="sqlSession_db")
	private SqlSession sqlSession;

	@Override
	public ArrayList<Total> getList(String question, int category) {
		ArrayList<Total> result = new ArrayList<Total>();
		NpcMapper NpcMapper = sqlSession.getMapper(NpcMapper.class);
		result = NpcMapper.getList(question,category);
		return result;
	}
}
