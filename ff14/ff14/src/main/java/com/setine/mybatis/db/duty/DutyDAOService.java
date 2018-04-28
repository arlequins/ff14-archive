package com.setine.mybatis.db.duty;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;

@Repository
public class DutyDAOService implements DutyDAO {

	@Autowired
	@Resource(name="sqlSession_db")
	private SqlSession sqlSession;

	@Override
	public ArrayList<Total> getList(String question, int category) {
		ArrayList<Total> result = new ArrayList<Total>();
		DutyMapper DutyMapper = sqlSession.getMapper(DutyMapper.class);
		result = DutyMapper.getList(question,category);
		return result;
	}

}
