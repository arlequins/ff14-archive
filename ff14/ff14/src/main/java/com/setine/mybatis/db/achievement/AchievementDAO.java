package com.setine.mybatis.db.achievement;

import java.util.ArrayList;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

public interface AchievementDAO {

	ArrayList<Total> getAchievementList(Params params);
}
