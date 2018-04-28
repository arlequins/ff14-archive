package com.setine.maria.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name = "FEAST_RAW")
public class FeastRankingRaw {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotEmpty
	@Column(name = "STDDATE", nullable = false)
	private String stddate;
	@NotNull
	@Column(name = "NATION", nullable = false)
	private int nation;
	@NotEmpty
	@Column(name = "RAW_DATA", nullable = false, length=1000000)
	private String raw_data;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATED", nullable = false)
	private Date created;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStddate() {
		return stddate;
	}

	public void setStddate(String stddate) {
		this.stddate = stddate;
	}

	public int getNation() {
		return nation;
	}

	public void setNation(int nation) {
		this.nation = nation;
	}

	public String getRaw_data() {
		return raw_data;
	}

	public void setRaw_data(String raw_data) {
		this.raw_data = raw_data;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}
}
