package com.setine.db.mongo;

import java.util.ArrayList;

import com.setine.db.mongo.model.ranking.Feast;



public interface FeastDAO {

	Feast insert(Feast object, String collection_name);

	Feast getFeast(int key, String collection_name);

	ArrayList<Feast> getFeasts(String collection_name);

}
