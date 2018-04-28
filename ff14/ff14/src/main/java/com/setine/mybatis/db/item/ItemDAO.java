package com.setine.mybatis.db.item;

import java.util.ArrayList;

import com.setine.db.model.Total;

public interface ItemDAO {

	ArrayList<Total> getList(String question, int category);
}
