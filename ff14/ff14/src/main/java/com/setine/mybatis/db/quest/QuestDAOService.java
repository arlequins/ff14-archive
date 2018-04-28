package com.setine.mybatis.db.quest;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;

@Repository
public class QuestDAOService implements QuestDAO {

	@Autowired
	@Resource(name="sqlSession_db")
	private SqlSession sqlSession;

	@Override
	public ArrayList<Total> getList(String question, int category) {
		ArrayList<Total> result = new ArrayList<Total>();
		QuestMapper QuestMapper = sqlSession.getMapper(QuestMapper.class);
		result = QuestMapper.getList(question,category);
		return result;
	}

}
