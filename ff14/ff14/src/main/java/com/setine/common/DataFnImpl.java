package com.setine.common;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.setine.db.model.Total;
import com.setine.db.support.model.Params;
import com.setine.mybatis.db.curd.CurdDAO;

@Repository
public class DataFnImpl implements DataFn {

	@Autowired
	private CurdDAO curdDAO;

	@Override
	public ArrayList<Total> getAchievementList(String question, int category) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		Params params = new Params(question,category);
		data_list = curdDAO.getAchievementList(params);
		return data_list;
	}

	@Override
	public ArrayList<Total> getDutyList(String question, int category) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		Params params = new Params(question,category);
		data_list = curdDAO.getDutyList(params);
		return data_list;
	}

	@Override
	public ArrayList<Total> getItemList(String question, int category) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		Params params = new Params(question,category);
		data_list = curdDAO.getItemList(params);
		return data_list;
	}

	@Override
	public ArrayList<Total> getNpcList(String question, int category) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		Params params = new Params(question,category);
		data_list = curdDAO.getNpcList(params);
		return data_list;
	}

	@Override
	public ArrayList<Total> getQuestList(String question, int category) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		Params params = new Params(question,category);
		data_list = curdDAO.getQuestList(params);
		return data_list;
	}
	@Override
	public ArrayList<Total> getPlacenameList(String question, int category) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		Params params = new Params(question,category);
		data_list = curdDAO.getPlacenameList(params);
		return data_list;
	}

	@Override
	public ArrayList<Total> getTotalList(String question, int category) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		if (question.length() > 1) {
			Params params = new Params(question,category);
			data_list.addAll(curdDAO.getAchievementList(params));
			data_list.addAll(curdDAO.getDutyList(params));
			data_list.addAll(curdDAO.getItemList(params));
			data_list.addAll(curdDAO.getNpcList(params));
			data_list.addAll(curdDAO.getQuestList(params));
			data_list.addAll(curdDAO.getPlacenameList(params));
		}
		return data_list;
	}
	@Override
	public ArrayList<Total> getAllList(String question) {
		ArrayList<Total> data_list = new ArrayList<Total>();
		if (question.length() > 1) {
			data_list.addAll(curdDAO.getAllList(question));
		}
		return data_list;
	}
}