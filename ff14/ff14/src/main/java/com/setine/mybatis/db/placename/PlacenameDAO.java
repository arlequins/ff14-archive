package com.setine.mybatis.db.placename;

import java.util.ArrayList;

import com.setine.db.model.Total;

public interface PlacenameDAO {

	ArrayList<Total> getList(String question, int category);
}
