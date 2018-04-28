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
@Table(name="FEAST_RANK")
public class FeastRanking {
	// unique key
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)	
	private Long id; // 1,2,3,4,5,6...
	// find by stddate, nation, name-world
	@NotEmpty
	@Column(name="STDDATE", nullable=false)	
	private String stddate; // 20170507
	@NotNull
	@Column(name="NATION", nullable=false)
	private int nation; // 0 = global, 1 = korea, 2 = china	
	@NotNull
	@Column(name="RANKTYPE", nullable=false)	
	private int ranktype; // { "0", "1", "2", "3", "4", "5" };
	@NotNull
	@Column(name="SOLO_PARTY", nullable=false)	
	private int solo_party; // "solo"==0, "party"==1
	@NotNull
	@Column(name="DCGROUP", nullable=false)	
	private int dcgroup; // dcgroup and nation -> check table, nationdcgroup

	// user info
	@NotEmpty
	@Column(name="USERNAME", nullable=false)
	private String name;
	@NotEmpty
	@Column(name="WORLD", nullable=false)	
	private String world;
	
	// other infomation	
	@Column(name="CUORDER", nullable=true)
	private int order;
	@Column(name="PREORDER", nullable=true)	
	private int preorder; // change string to int
	@Column(name="WIN_COUNT", nullable=true)	
	private int win_count;
	@Column(name="MATCH_COUNT", nullable=true)	
	private int match_count;
	@Column(name="MATCH_RATE", nullable=true)	
	private int match_rate;
	@Column(name="PREV_MATCH_RATE", nullable=true)	
	private int prev_match_rate; // change string to int

	@Column(name="RANK", nullable=true)	
	private int rank;  // change string to int

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

	public int getRanktype() {
		return ranktype;
	}

	public void setRanktype(int ranktype) {
		this.ranktype = ranktype;
	}

	public int getSolo_party() {
		return solo_party;
	}

	public void setSolo_party(int solo_party) {
		this.solo_party = solo_party;
	}

	public int getDcgroup() {
		return dcgroup;
	}

	public void setDcgroup(int dcgroup) {
		this.dcgroup = dcgroup;
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

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public int getPreorder() {
		return preorder;
	}

	public void setPreorder(int preorder) {
		this.preorder = preorder;
	}

	public int getWin_count() {
		return win_count;
	}

	public void setWin_count(int win_count) {
		this.win_count = win_count;
	}

	public int getMatch_count() {
		return match_count;
	}

	public void setMatch_count(int match_count) {
		this.match_count = match_count;
	}

	public int getMatch_rate() {
		return match_rate;
	}

	public void setMatch_rate(int match_rate) {
		this.match_rate = match_rate;
	}

	public int getPrev_match_rate() {
		return prev_match_rate;
	}

	public void setPrev_match_rate(int prev_match_rate) {
		this.prev_match_rate = prev_match_rate;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}
}
