package com.setine.common.ranking.china;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FeastDataC {
	private Long character_id;
	private String character_name;
	private String group_name;
	private int rank_num;
	private int oldrank;
	private int colosseumsolorankwincount;
	private int colosseumsolorankmatchcount;
	private int colosseumseasonnumber;
	private int oldrate;
	private int colosseumsolorankmatchrate;
	private int colosseumsolomatchrank;
	private int colosseumpartymatchrank;
	private int colosseumpartyrankmatchcount;
	private int colosseumpartyrankwincount;
	private int colosseumpartyrankmatchrate;
	private int race;
	private int tribe;
	private int gender;

	@JsonProperty("character_id")
	public Long getCharacter_id() {
		return character_id;
	}

	@JsonProperty("character_id")
	public void setCharacter_id(Long character_id) {
		this.character_id = character_id;
	}

	@JsonProperty("character_name")
	public String getCharacter_name() {
		return character_name;
	}

	@JsonProperty("character_name")
	public void setCharacter_name(String character_name) {
		this.character_name = character_name;
	}

	@JsonProperty("group_name")
	public String getGroup_name() {
		return group_name;
	}

	@JsonProperty("group_name")
	public void setGroup_name(String group_name) {
		this.group_name = group_name;
	}

	@JsonProperty("rank_num")
	public int getRank_num() {
		return rank_num;
	}

	@JsonProperty("rank_num")
	public void setRank_num(int rank_num) {
		this.rank_num = rank_num;
	}

	@JsonProperty("oldrank")
	public int getOldrank() {
		return oldrank;
	}

	@JsonProperty("oldrank")
	public void setOldrank(int oldrank) {
		this.oldrank = oldrank;
	}

	@JsonProperty("colosseumsolorankwincount")
	public int getColosseumsolorankwincount() {
		return colosseumsolorankwincount;
	}

	@JsonProperty("colosseumsolorankwincount")
	public void setColosseumsolorankwincount(int colosseumsolorankwincount) {
		this.colosseumsolorankwincount = colosseumsolorankwincount;
	}

	@JsonProperty("colosseumsolorankmatchcount")
	public int getColosseumsolorankmatchcount() {
		return colosseumsolorankmatchcount;
	}

	@JsonProperty("colosseumsolorankmatchcount")
	public void setColosseumsolorankmatchcount(int colosseumsolorankmatchcount) {
		this.colosseumsolorankmatchcount = colosseumsolorankmatchcount;
	}

	@JsonProperty("colosseumseasonnumber")
	public int getColosseumseasonnumber() {
		return colosseumseasonnumber;
	}

	@JsonProperty("colosseumseasonnumber")
	public void setColosseumseasonnumber(int colosseumseasonnumber) {
		this.colosseumseasonnumber = colosseumseasonnumber;
	}

	@JsonProperty("oldrate")
	public int getOldrate() {
		return oldrate;
	}

	@JsonProperty("oldrate")
	public void setOldrate(int oldrate) {
		this.oldrate = oldrate;
	}

	@JsonProperty("colosseumsolorankmatchrate")
	public int getColosseumsolorankmatchrate() {
		return colosseumsolorankmatchrate;
	}

	@JsonProperty("colosseumsolorankmatchrate")
	public void setColosseumsolorankmatchrate(int colosseumsolorankmatchrate) {
		this.colosseumsolorankmatchrate = colosseumsolorankmatchrate;
	}

	@JsonProperty("colosseumsolomatchrank")
	public int getColosseumsolomatchrank() {
		return colosseumsolomatchrank;
	}

	@JsonProperty("colosseumsolomatchrank")
	public void setColosseumsolomatchrank(int colosseumsolomatchrank) {
		this.colosseumsolomatchrank = colosseumsolomatchrank;
	}

	@JsonProperty("colosseumpartymatchrank")
	public int getColosseumpartymatchrank() {
		return colosseumpartymatchrank;
	}

	@JsonProperty("colosseumpartymatchrank")
	public void setColosseumpartymatchrank(int colosseumpartymatchrank) {
		this.colosseumpartymatchrank = colosseumpartymatchrank;
	}

	@JsonProperty("colosseumpartyrankmatchcount")
	public int getColosseumpartyrankmatchcount() {
		return colosseumpartyrankmatchcount;
	}

	@JsonProperty("colosseumpartyrankmatchcount")
	public void setColosseumpartyrankmatchcount(int colosseumpartyrankmatchcount) {
		this.colosseumpartyrankmatchcount = colosseumpartyrankmatchcount;
	}

	@JsonProperty("colosseumpartyrankwincount")
	public int getColosseumpartyrankwincount() {
		return colosseumpartyrankwincount;
	}

	@JsonProperty("colosseumpartyrankwincount")
	public void setColosseumpartyrankwincount(int colosseumpartyrankwincount) {
		this.colosseumpartyrankwincount = colosseumpartyrankwincount;
	}

	@JsonProperty("colosseumpartyrankmatchrate")
	public int getColosseumpartyrankmatchrate() {
		return colosseumpartyrankmatchrate;
	}

	@JsonProperty("colosseumpartyrankmatchrate")
	public void setColosseumpartyrankmatchrate(int colosseumpartyrankmatchrate) {
		this.colosseumpartyrankmatchrate = colosseumpartyrankmatchrate;
	}

	@JsonProperty("race")
	public int getRace() {
		return race;
	}

	@JsonProperty("race")
	public void setRace(int race) {
		this.race = race;
	}

	@JsonProperty("tribe")
	public int getTribe() {
		return tribe;
	}

	@JsonProperty("tribe")
	public void setTribe(int tribe) {
		this.tribe = tribe;
	}

	@JsonProperty("gender")
	public int getGender() {
		return gender;
	}
	@JsonProperty("gender")
	
	public void setGender(int gender) {
		this.gender = gender;
	}

}
