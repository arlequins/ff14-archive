package com.setine.mybatis.db.npc;

import java.util.ArrayList;

import com.setine.db.model.Total;

public interface NpcDAO {

	ArrayList<Total> getList(String question, int category);
}
