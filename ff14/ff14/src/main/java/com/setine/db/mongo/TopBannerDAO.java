package com.setine.db.mongo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.setine.db.mongo.model.TopBanner;

public interface TopBannerDAO {

	TopBanner insert(TopBanner object, String collection_name);

	void update(TopBanner object, String cKey, Object cValue, String collection_name);

	TopBanner updateAll(TopBanner object, String collection_name) throws JsonProcessingException;

	TopBanner getTopBanner(int key, String target, String collection_name);

}
