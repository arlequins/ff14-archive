package com.setine.db.mongo;

import java.text.ParseException;
import java.util.ArrayList;

import com.setine.db.mongo.model.ranking.Data;

public interface DataDAO {

	Data insert(Data object);

	Data getData(int key);

	ArrayList<Data> getDataList();

	Data getByDate(String date1,String date2) throws ParseException;

	Data getFeast(int key, String collection_name);

	ArrayList<Data> getFeastByDate(String date, String collection_name) throws ParseException;

}
