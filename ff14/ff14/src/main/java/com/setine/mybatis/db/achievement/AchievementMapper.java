package com.setine.mybatis.db.achievement;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

public interface AchievementMapper {
	ArrayList<Total> getList(@Param("params")Params params);
	ArrayList<Total> getAchievementList(@Param("params")Params params);
}
