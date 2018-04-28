package com.setine.db.mongo.model.ranking;

public class FeastData {
	private String character_path;
	private String character_face;
	private int order;
	private String preorder;
	private String name;
	private String world;
	private int win_count;
	private String winning_rate;
	private int match_count;
	private int match_rate;
	private String prev_match_rate;
	private String rank;

	public FeastData(String character_path, String character_face, int order, String preorder, String name, String world, int win_count, String winning_rate, int match_count, int match_rate, String prev_match_rate, String rank) {
		this.character_face = character_face;
		this.character_path = character_path;
		this.order = order;
		this.preorder = preorder;
		this.name = name;
		this.world = world;
		this.win_count = win_count;
		this.winning_rate = winning_rate;
		this.match_count = match_count;
		this.match_rate = match_rate;
		this.prev_match_rate= prev_match_rate;
		this.rank = rank;
	}

	public String getCharacter_path() {
		return character_path;
	}

	public void setCharacter_path(String character_path) {
		this.character_path = character_path;
	}

	public String getCharacter_face() {
		return character_face;
	}

	public void setCharacter_face(String character_face) {
		this.character_face = character_face;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public String getPreorder() {
		return preorder;
	}

	public void setPreorder(String preorder) {
		this.preorder = preorder;
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

	public int getWin_count() {
		return win_count;
	}

	public void setWin_count(int win_count) {
		this.win_count = win_count;
	}

	public String getWinning_rate() {
		return winning_rate;
	}

	public void setWinning_rate(String winning_rate) {
		this.winning_rate = winning_rate;
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

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public String getPrev_match_rate() {
		return prev_match_rate;
	}

	public void setPrev_match_rate(String prev_match_rate) {
		this.prev_match_rate = prev_match_rate;
	}
}
