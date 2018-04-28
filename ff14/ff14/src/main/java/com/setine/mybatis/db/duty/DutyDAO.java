package com.setine.mybatis.db.duty;

import java.util.ArrayList;

import com.setine.db.model.Total;

public interface DutyDAO {

	ArrayList<Total> getList(String question, int category);
}
