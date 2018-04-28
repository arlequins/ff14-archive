package com.setine.db.mongo.model;

public class Notice {
	private String link;
	private String link_content;
	private String link_text;

	public String getLink_text() {
		return link_text;
	}

	public void setLink_text(String link_text) {
		this.link_text = link_text;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getLink_content() {
		return link_content;
	}

	public void setLink_content(String link_content, int status) {

		if (status == 1) {
			if (link_content.length() > 60) {
				this.link_content = link_content.substring(0, 60);
			} else {
				this.link_content = link_content;
			}
		} else {
			this.link_content = link_content;
		}

	}
}
