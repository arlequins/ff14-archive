package com.setine.mybatis.db.duty;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

public interface DutyMapper {
	ArrayList<Total> getList(@Param("question")String question, @Param("category")int category);

	ArrayList<Total> getDutyList(@Param("params")Params params);
}
