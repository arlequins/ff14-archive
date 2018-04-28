package com.setine.db.mongo.model;

import java.util.Date;
import java.util.List;

public class Comment {
	private int key;
	private Date date;
	private String name;
	private CharInfo charInfo;
	private int besthit;
	private String content;
	private List<InnerComment> innerComment;

	public Comment(Date date, String name, CharInfo charInfo, int besthit, String content) {
		this.date = date;
		this.name = name;
		this.charInfo = charInfo;
		this.besthit = besthit;
		this.content = content;
	}

	public Comment() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public CharInfo getCharInfo() {
		return charInfo;
	}

	public void setCharInfo(CharInfo charInfo) {
		this.charInfo = charInfo;
	}

	public int getBesthit() {
		return besthit;
	}

	public void setBesthit(int besthit) {
		this.besthit = besthit;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<InnerComment> getInnerComment() {
		return innerComment;
	}

	public void setInnerComment(List<InnerComment> innerComment) {
		this.innerComment = innerComment;
	}

}
