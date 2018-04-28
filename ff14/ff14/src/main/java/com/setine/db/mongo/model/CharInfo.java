package com.setine.db.mongo.model;

public class CharInfo {
	private String server;
	private String className;
	private int level;

	
	public CharInfo(String server, String className, int level) {
		this.server = server;
		this.className = className;
		this.level = level;
	}

	public CharInfo() {
	}

	public String getServer() {
		return server;
	}

	public void setServer(String server) {
		this.server = server;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}
}
