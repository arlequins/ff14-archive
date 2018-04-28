package com.setine.db.mongo.model.ranking;

public class DeadData {
	private String character_path;
	private String character_face;
	private String job;
	private String job_icon;
	private int order;
	private String name;
	private String world;
	private long score;
	private int reaching;
	private long time;

	public DeadData(String character_path, String character_face, String job, String job_icon, int order, String name, String world, long score, int reaching, long time) {
		this.character_face = character_face;
		this.character_path = character_path;
		this.job = job;
		this.job_icon = job_icon;
		this.order = order;
		this.name = name;
		this.world = world;
		this.score = score;
		this.reaching = reaching;
		this.time = time;
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

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getJob_icon() {
		return job_icon;
	}

	public void setJob_icon(String job_icon) {
		this.job_icon = job_icon;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
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

	public long getScore() {
		return score;
	}

	public void setScore(long score) {
		this.score = score;
	}

	public int getReaching() {
		return reaching;
	}

	public void setReaching(int reaching) {
		this.reaching = reaching;
	}

	public long getTime() {
		return time;
	}

	public void setTime(long time) {
		this.time = time;
	}

}
