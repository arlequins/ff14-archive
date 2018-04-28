package com.setine.db.mongo;

import java.text.ParseException;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.setine.db.mongo.model.ranking.Data;

@Repository
public class DataDAOImpl extends AbstractDao<Integer, Data> implements DataDAO {

	@Override
	public Data insert(Data object) {
		String collectionName = "FF14G_Ranking";		
		setInsert(object, collectionName);
		return object;
	}

	@Override
	public Data getData(int key) {
		String collectionName = "FF14G_Ranking";
		return getByKey1(key, collectionName);
	}
	@Override
	public Data getByDate(String date1,String date2) throws ParseException {
		String collectionName = "FF14G_Ranking";
		
		return getByDates(date1,date2, collectionName);
	}

	@Override
	public Data getFeast(int key, String collection_name) {
		return getByKey1(key, collection_name);
	}

	@Override
	public ArrayList<Data> getFeastByDate(String date, String collection_name) throws ParseException {
		return getByKeyByDate(date, collection_name);
	}
	
	@Override
	public ArrayList<Data> getDataList() {
		String collectionName = "FF14G_Ranking";		
		return getAllList(collectionName);
	}
}