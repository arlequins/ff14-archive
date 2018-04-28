package com.setine.db.mongo;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.setine.db.mongo.model.Crow;

@Repository
public class CrowDAOImpl extends AbstractDao<Integer, Crow> implements CrowDAO {

	@Override
	public Crow insert(Crow object, String collection_name) {
		setInsert(object, collection_name);
		return object;
	}

	@Override
	public void update(Crow object, String cKey, Object cValue, String collection_name) {
		int key = object.getKey();
		String target = "key";

		Crow preValue = getByKey2(object.getKey(), target, collection_name);

		// comparing values
		if (!object.equals(preValue)) {
			setUpdate(key, target, cKey, cValue, collection_name);
		}
	}

	@Override
	public Crow getCrow(int key, String collection_name) {
		return getByKey1(key, collection_name);
	}
	@Override
	public Crow getRecentCrow(String collection_name) {
		return getByLastOne(collection_name);
	}

	@Override
	public ArrayList<Crow> getCrows(String collection_name) {
		return getAllList(collection_name);
	}
}