package com.setine.maria.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name = "FEAST_SEASON")
public class FeastRankingSeason {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Column(name = "NATION", nullable = false)
	private int nation;
	@NotEmpty
	@Column(name = "STARTDAY", nullable = false)
	private String startday;
	@Column(name = "ENDDAY", nullable = true)
	private String endday;
	@NotEmpty
	@Column(name = "CURRENTSTATUS", nullable = false)
	private int currentstatus;
	@NotEmpty
	@Column(name = "SEASON", nullable = false)
	private int season;
	@Column(name = "NOTE", nullable = true)
	private String note;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getNation() {
		return nation;
	}

	public void setNation(int nation) {
		this.nation = nation;
	}

	public String getStartday() {
		return startday;
	}

	public void setStartday(String startday) {
		this.startday = startday;
	}

	public String getEndday() {
		return endday;
	}

	public void setEndday(String endday) {
		this.endday = endday;
	}

	public int getCurrentstatus() {
		return currentstatus;
	}

	public void setCurrentstatus(int currentstatus) {
		this.currentstatus = currentstatus;
	}

	public int getSeason() {
		return season;
	}

	public void setSeason(int season) {
		this.season = season;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
