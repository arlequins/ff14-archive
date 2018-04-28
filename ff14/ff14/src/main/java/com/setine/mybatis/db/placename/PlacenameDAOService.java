package com.setine.mybatis.db.placename;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;

@Repository
public class PlacenameDAOService implements PlacenameDAO {

	@Autowired
	@Resource(name="sqlSession_db")
	private SqlSession sqlSession;

	@Override
	public ArrayList<Total> getList(String question, int category) {
		ArrayList<Total> result = new ArrayList<Total>();
		PlacenameMapper PlacenameMapper = sqlSession.getMapper(PlacenameMapper.class);
		result = PlacenameMapper.getList(question,category);
		return result;
	}

}
