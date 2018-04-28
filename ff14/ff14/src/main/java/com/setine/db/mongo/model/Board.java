package com.setine.db.mongo.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Board implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -8190864807582533082L;
	private int key;
	private Date date;
	private String date_c;
	private String nickName;
	private int writer_lv;
	private CharInfo charInfo;
	private int hit;
	private int besthit;
	private String title;
	private String content;
	private List<Comment> comment;
	private int comment_count;

	public Board(int key, Date date, String nickName, CharInfo charInfo, int hit, int besthit, String title, String content) {
		this.key = key;
		this.date = date;
		this.nickName = nickName;
		this.charInfo = charInfo;
		this.hit = hit;
		this.besthit = besthit;
		this.title = title;
		this.content = content;
	}

	public Board(int key, Date date, String nickName, int hit, int besthit, String title, String content) {
		this.key = key;
		this.date = date;
		this.nickName = nickName;
		this.hit = hit;
		this.besthit = besthit;
		this.title = title;
		this.content = content;
	}

	public Board(int key, Date date, String nickName, int writer_lv, int hit, int besthit, String title, String content) {
		this.key = key;
		this.date = date;
		this.nickName = nickName;
		this.writer_lv = writer_lv;
		this.hit = hit;
		this.besthit = besthit;
		this.title = title;
		this.content = content;
	}

	public int getWriter_lv() {
		return writer_lv;
	}

	public void setWriter_lv(int writer_lv) {
		this.writer_lv = writer_lv;
	}

	public Board() {
	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
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

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	public int getBesthit() {
		return besthit;
	}

	public void setBesthit(int besthit) {
		this.besthit = besthit;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<Comment> getComment() {
		return comment;
	}

	public void setComment(List<Comment> comment) {
		this.comment = comment;
	}

	public int getComment_count() {
		return comment_count;
	}

	public void setComment_count(int comment_count) {
		this.comment_count = comment_count;
	}

	public String getDate_c() {
		return date_c;
	}

	public void setDate_c(String date_c) {
		this.date_c = date_c;
	}

}
