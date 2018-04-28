package com.setine.db.mongo;

import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.setine.db.mongo.model.TopBanner;

@Repository
public class TopBannerDAOImpl extends AbstractDao<Integer, TopBanner> implements TopBannerDAO {

	@Override
	public TopBanner insert(TopBanner object, String collection_name) {
		setInsert(object, collection_name);
		return object;
	}
	@Override
	public TopBanner updateAll(TopBanner object, String collection_name) throws JsonProcessingException {
		int key = object.getKey();
		String target = "key";
		setUpdateAll(key, object,target, collection_name);
		return object;
	}

	@Override
	public void update(TopBanner object, String cKey, Object cValue, String collection_name) {
		int key = object.getKey();
		String target = "key";

		TopBanner preValue = getByKey2(object.getKey(),target,collection_name);
		
		// comparing values
		if (!object.equals(preValue)) {
			setUpdate(key, target,cKey,cValue,collection_name);
		}
	}

	@Override
	public TopBanner getTopBanner(int key, String target, String collection_name) {
		return getLast(key, target, collection_name);
	}
}