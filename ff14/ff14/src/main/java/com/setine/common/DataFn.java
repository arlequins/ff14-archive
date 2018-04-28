package com.setine.common;

import java.util.ArrayList;

import com.setine.db.model.Total;

public interface DataFn {

	ArrayList<Total> getAchievementList(String question, int category);

	ArrayList<Total> getDutyList(String question, int category);

	ArrayList<Total> getItemList(String question, int category);

	ArrayList<Total> getNpcList(String question, int category);

	ArrayList<Total> getQuestList(String question, int category);

	ArrayList<Total> getTotalList(String question, int category);

	ArrayList<Total> getPlacenameList(String question, int category);

	ArrayList<Total> getAllList(String question);
}
