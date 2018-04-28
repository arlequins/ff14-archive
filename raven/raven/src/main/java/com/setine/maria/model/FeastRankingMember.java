package com.setine.maria.model;

import java.util.ArrayList;
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
import org.springframework.data.annotation.Transient;

import com.setine.common.object.FeastExport;

@Entity
@Table(name = "FEAST_MEMBER")
public class FeastRankingMember {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Column(name = "NATION", nullable = false)
	private int nation;
	// user info
	@NotEmpty
	@Column(name = "USERNAME", nullable = false)
	private String name;
	@NotEmpty
	@Column(name = "WORLD", nullable = false)
	private String world;
	// these are difference with nations
	@Column(name = "CHARACTER_PATH", nullable = true)
	private String character_path;
	@Column(name = "CHARACTER_FACE", nullable = true)
	private String character_face;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATED", nullable = false)
	private Date created;
	@Transient
	private ArrayList<FeastExport> rankList;

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWorld() {
		return world;
	}

	public void setWorld(String world) {
		this.world = world;
	}

	public String getCharacter_path() {
		return character_path;
	}

	public void setCharacter_path(String character_path) {
		this.character_path = character_path;
	}

	public String getCharacter_face() {
		return character_face;
	}

	public void setCharacter_face(String character_face) {
		this.character_face = character_face;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public ArrayList<FeastExport> getRankList() {
		return rankList;
	}

	public void setRankList(ArrayList<FeastExport> rankList) {
		this.rankList = rankList;
	}

}
