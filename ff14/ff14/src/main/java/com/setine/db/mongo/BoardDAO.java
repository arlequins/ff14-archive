package com.setine.db.mongo;

import java.util.ArrayList;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.setine.db.mongo.model.Board;
import com.setine.db.mongo.model.BoardInfo;

public interface BoardDAO {

	Board getBoard(int key, String collection_name);

	Board insert(Board object, String collection_name);

	void update(Board object, String cKey, Object cValue, String collection_name);

	Board updateAll(Board object, String collection_name) throws JsonProcessingException;

	ArrayList<Board> getBoards(BoardInfo boardInfo, String collection_name);

	BoardInfo getBaordCountData(BoardInfo boardInfo, String collection_name);

}
