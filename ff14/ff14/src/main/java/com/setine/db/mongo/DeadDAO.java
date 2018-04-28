package com.setine.db.mongo;

import java.util.ArrayList;

import com.setine.db.mongo.model.ranking.Dead;

public interface DeadDAO {

	Dead insert(Dead object, String collection_name);

	Dead getFeast(int key, String collection_name);

	ArrayList<Dead> getFeasts(String collection_name);

}
