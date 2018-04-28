package com.setine.db.mongo;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.setine.db.mongo.model.Board;
import com.setine.db.mongo.model.BoardInfo;

@Repository
public class BoardDAOImpl extends AbstractDao<Integer, Board> implements BoardDAO {

	@Override
	public Board insert(Board object, String collection_name) {
		setInsert(object, collection_name);
		return object;
	}
	@Override
	public Board updateAll(Board object, String collection_name) throws JsonProcessingException {
		int key = object.getKey();
		String target = "key";
		setUpdateAll(key, object,target, collection_name);
		return object;
	}

	@Override
	public void update(Board object, String cKey, Object cValue, String collection_name) {
		int key = object.getKey();
		String target = "key";

		Board preValue = getByKey2(object.getKey(),target,collection_name);
		
		// comparing values
		if (!object.equals(preValue)) {
			setUpdate(key, target,cKey,cValue,collection_name);
		}
	}

	@Override
	public Board getBoard(int key, String collection_name) {
		return getByKey1(key, collection_name);
	}
	@Override
	public BoardInfo getBaordCountData(BoardInfo boardInfo, String collection_name) {
		return getTotalCount(boardInfo, collection_name);
	}

	@Override
	public ArrayList<Board> getBoards(BoardInfo boardInfo, String collection_name) {
		return getAllList2(boardInfo, collection_name);
	}
}