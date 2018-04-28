package com.setine.db.mongo;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.setine.db.mongo.model.ranking.Dead;

@Repository
public class DeadDAOImpl extends AbstractDao<Integer, Dead> implements DeadDAO {

	@Override
	public Dead insert(Dead object, String collection_name) {
		setInsert(object, collection_name);
		return object;
	}

	@Override
	public Dead getFeast(int key, String collection_name) {
		return getByKey1(key, collection_name);
	}

	@Override
	public ArrayList<Dead> getFeasts(String collection_name) {
		return getAllList(collection_name);
	}
}