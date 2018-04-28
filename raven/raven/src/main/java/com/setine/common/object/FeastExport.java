package com.setine.common.object;

import com.setine.maria.model.FeastRanking;

public class FeastExport {
	private String stddate;
	private int nation;
	private int dcgroup;
	private String name;
	private String world;
	private int order;
	private int preorder;
	private int win_count;
	private int match_count;
	private int match_rate;
	private int prev_match_rate;

	public FeastExport() {
		super();
	}

	public FeastExport(FeastRanking data) {
		this.stddate = data.getStddate();
		this.dcgroup = data.getDcgroup();
		this.name = data.getName();
		this.world = data.getWorld();
		this.order = data.getOrder();
		this.preorder = data.getPreorder();
		this.win_count = data.getWin_count();
		this.match_count = data.getMatch_count();
		this.match_rate = data.getMatch_rate();
		this.prev_match_rate = data.getPrev_match_rate();
	}

	public String getStddate() {
		return stddate;
	}

	public void setStddate(String stddate) {
		this.stddate = stddate;
	}

	public int getNation() {
		return nation;
	}

	public void setNation(int nation) {
		this.nation = nation;
	}

	public int getDcgroup() {
		return dcgroup;
	}

	public void setDcgroup(int dcgroup) {
		this.dcgroup = dcgroup;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWorld() {
		return world;
	}

	public void setWorld(String world) {
		this.world = world;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public int getPreorder() {
		return preorder;
	}

	public void setPreorder(int preorder) {
		this.preorder = preorder;
	}

	public int getWin_count() {
		return win_count;
	}

	public void setWin_count(int win_count) {
		this.win_count = win_count;
	}

	public int getMatch_count() {
		return match_count;
	}

	public void setMatch_count(int match_count) {
		this.match_count = match_count;
	}

	public int getMatch_rate() {
		return match_rate;
	}

	public void setMatch_rate(int match_rate) {
		this.match_rate = match_rate;
	}

	public int getPrev_match_rate() {
		return prev_match_rate;
	}

	public void setPrev_match_rate(int prev_match_rate) {
		this.prev_match_rate = prev_match_rate;
	}

}
