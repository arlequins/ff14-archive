package com.setine.mybatis.db.quest;

import java.util.ArrayList;

import com.setine.db.model.Total;

public interface QuestDAO {

	ArrayList<Total> getList(String question, int category);
}
