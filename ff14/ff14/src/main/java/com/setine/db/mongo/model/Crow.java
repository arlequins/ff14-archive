package com.setine.db.mongo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Crow {
	private int key;
	private String date;
	private String data;

	public Crow(String date, String data) {
		this.date = date;
		this.data = data;
	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

}
