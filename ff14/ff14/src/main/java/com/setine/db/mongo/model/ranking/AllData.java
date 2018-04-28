package com.setine.db.mongo.model.ranking;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class AllData {
	private Date LoggingTime;
	private List<Feast> Feast;
	private List<Dead> Dead;

	public List<Feast> getFeast() {
		return Feast;
	}

	public void setFeast(List<Feast> feast) {
		Feast = feast;
	}

	public List<Dead> getDead() {
		return Dead;
	}

	public void setDead(List<Dead> dead) {
		Dead = dead;
	}

	public Date getLoggingTime() {
		return LoggingTime;
	}

	public void setLoggingTime(Date loggingTime) {
		LoggingTime = loggingTime;
	}

}
