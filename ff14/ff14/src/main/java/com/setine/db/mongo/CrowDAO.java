package com.setine.db.mongo;

import java.util.ArrayList;

import com.setine.db.mongo.model.Crow;

public interface CrowDAO {

	Crow insert(Crow object, String collection_name);

	void update(Crow object, String cKey, Object cValue, String collection_name);

	Crow getCrow(int key, String collection_name);

	ArrayList<Crow> getCrows(String collection_name);

	Crow getRecentCrow(String collection_name);

}
