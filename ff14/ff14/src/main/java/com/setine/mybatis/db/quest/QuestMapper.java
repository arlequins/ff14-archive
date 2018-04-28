package com.setine.mybatis.db.quest;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

public interface QuestMapper {
	ArrayList<Total> getList(@Param("question")String question, @Param("category")int category);

	ArrayList<Total> getQuestList(@Param("params")Params params);
}
