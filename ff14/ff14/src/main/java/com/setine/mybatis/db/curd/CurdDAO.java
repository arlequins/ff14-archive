package com.setine.mybatis.db.curd;

import java.util.ArrayList;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

public interface CurdDAO {

	ArrayList<Total> getAchievementList(Params params);

	ArrayList<Total> getDutyList(Params params);

	ArrayList<Total> getItemList(Params params);

	ArrayList<Total> getNpcList(Params params);

	ArrayList<Total> getQuestList(Params params);

	ArrayList<Total> getPlacenameList(Params params);

	ArrayList<Total> getAllList(String question);
}
