package com.setine.mybatis.db.item;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;

@Repository
public class ItemDAOService implements ItemDAO {

	@Autowired
	@Resource(name="sqlSession_db")
	private SqlSession sqlSession;

	@Override
	public ArrayList<Total> getList(String question, int category) {
		ArrayList<Total> result = new ArrayList<Total>();
		ItemMapper ItemMapper = sqlSession.getMapper(ItemMapper.class);
		result = ItemMapper.getList(question, category);
		return result;
	}
}
