package com.setine.db.mongo.model;

import java.util.List;

public class NoticeArray {
	private List<Notice> banner;
	private List<Notice> article;
	private List<Notice> topic;
	private Notice topBanner;

	public List<Notice> getTopic() {
		return topic;
	}

	public void setTopic(List<Notice> topic) {
		this.topic = topic;
	}

	public List<Notice> getBanner() {
		return banner;
	}

	public void setBanner(List<Notice> banner) {
		this.banner = banner;
	}

	public List<Notice> getArticle() {
		return article;
	}

	public void setArticle(List<Notice> article) {
		this.article = article;
	}

	public Notice getTopBanner() {
		return topBanner;
	}

	public void setTopBanner(Notice topBanner) {
		this.topBanner = topBanner;
	}

}
