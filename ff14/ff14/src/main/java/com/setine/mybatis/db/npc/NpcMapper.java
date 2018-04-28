package com.setine.mybatis.db.npc;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

public interface NpcMapper {
	ArrayList<Total> getList(@Param("question")String question, @Param("category")int category);

	ArrayList<Total> getNpcList(@Param("params")Params params);
}
