package com.setine.mybatis.db.curd;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;
import com.setine.mybatis.db.achievement.AchievementMapper;
import com.setine.mybatis.db.duty.DutyMapper;
import com.setine.mybatis.db.item.ItemMapper;
import com.setine.mybatis.db.npc.NpcMapper;
import com.setine.mybatis.db.placename.PlacenameMapper;
import com.setine.mybatis.db.quest.QuestMapper;

@Repository
public class CurdDAOService implements CurdDAO {

	@Autowired
	@Resource(name = "sqlSession_db")
	private SqlSession sqlSession;

	@Override
	public ArrayList<Total> getAchievementList(Params params) {
		ArrayList<Total> result = new ArrayList<Total>();
		AchievementMapper AchievementMapper = sqlSession.getMapper(AchievementMapper.class);
		result = AchievementMapper.getAchievementList(params);
		return result;
	}

	@Override
	public ArrayList<Total> getDutyList(Params params) {
		ArrayList<Total> result = new ArrayList<Total>();
		DutyMapper DutyMapper = sqlSession.getMapper(DutyMapper.class);
		result = DutyMapper.getDutyList(params);
		return result;
	}

	@Override
	public ArrayList<Total> getItemList(Params params) {
		ArrayList<Total> result = new ArrayList<Total>();
		ItemMapper ItemMapper = sqlSession.getMapper(ItemMapper.class);
		result = ItemMapper.getItemList(params);
		return result;
	}

	@Override
	public ArrayList<Total> getNpcList(Params params) {
		ArrayList<Total> result = new ArrayList<Total>();
		NpcMapper NpcMapper = sqlSession.getMapper(NpcMapper.class);
		result = NpcMapper.getNpcList(params);
		return result;
	}

	@Override
	public ArrayList<Total> getQuestList(Params params) {
		ArrayList<Total> result = new ArrayList<Total>();
		QuestMapper QuestMapper = sqlSession.getMapper(QuestMapper.class);
		result = QuestMapper.getQuestList(params);
		return result;
	}

	@Override
	public ArrayList<Total> getPlacenameList(Params params) {
		ArrayList<Total> result = new ArrayList<Total>();
		PlacenameMapper PlacenameMapper = sqlSession.getMapper(PlacenameMapper.class);
		result = PlacenameMapper.getPlacenameList(params);
		return result;
	}

	@Override
	public ArrayList<Total> getAllList(String question) {
		ArrayList<Total> result = new ArrayList<Total>();
		ItemMapper ItemMapper = sqlSession.getMapper(ItemMapper.class);
		result = ItemMapper.getAllList(question);
		return result;
	}
}
