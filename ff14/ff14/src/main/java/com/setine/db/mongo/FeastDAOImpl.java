package com.setine.db.mongo;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.setine.db.mongo.model.ranking.Feast;


@Repository
public class FeastDAOImpl extends AbstractDao<Integer, Feast> implements FeastDAO {

	@Override
	public Feast insert(Feast object, String collection_name) {
		setInsert(object, collection_name);
		return object;
	}

	@Override
	public Feast getFeast(int key, String collection_name) {
		return getByKey1(key, collection_name);
	}

	@Override
	public ArrayList<Feast> getFeasts(String collection_name) {
		return getAllList(collection_name);
	}
}