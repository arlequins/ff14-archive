package com.setine.db.mongo.model;

import java.io.Serializable;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TopBanner implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -5111072235678869328L;
	private int key;
	private String link;
	private String link_content;

	public TopBanner() {
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public String getLink_content() {
		return link_content;
	}

	public void setLink_content(String link_content) {
		this.link_content = link_content;
	}

}
