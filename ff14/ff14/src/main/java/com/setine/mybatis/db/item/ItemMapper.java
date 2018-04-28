package com.setine.mybatis.db.item;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;

public interface ItemMapper {
	ArrayList<Total> getList(@Param("question") String question, @Param("category") int category);

	ArrayList<Total> getItemList(@Param("params") Params params);

	ArrayList<Total> getAllList(@Param("question") String question);
}
