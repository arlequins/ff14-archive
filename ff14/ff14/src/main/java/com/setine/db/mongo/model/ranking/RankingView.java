package com.setine.db.mongo.model.ranking;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class RankingView {
	private Date LoggingTime;
	private Params Params;
	private Params ChinaParams;
	private Params KoreaParams;
	private List<Feast> GlobalFeast;
	private List<Feast> ChinaFeast;
	private List<Feast> KoreaFeast;
	private List<Dead> GlobalDead;
	private List<Dead> ChinaDead;
	private List<Dead> KoreaDead;

	public RankingView() {
	}

	public RankingView(Data data) {
		this.LoggingTime = data.getLoggingTime();
		this.GlobalFeast = data.getFeast();
		this.GlobalDead = data.getDead();
		setParams();
	}
	
	public RankingView(Data data, Data data2) {
		this.LoggingTime = data.getLoggingTime();
		this.GlobalFeast = data.getFeast();
		this.ChinaFeast = data2.getFeast();
		this.GlobalDead = data.getDead();
		this.ChinaDead = data2.getDead();
		setParams();
		setChinaParams();
	}

	public RankingView(Data data, Data data2, Data data3) {
		this.LoggingTime = data.getLoggingTime();
		this.GlobalFeast = data.getFeast();
		this.ChinaFeast = data2.getFeast();
		this.KoreaFeast = data3.getFeast();
		this.GlobalDead = data.getDead();
		this.ChinaDead = data2.getDead();
		this.KoreaDead = data3.getDead();
		setKoreaParams();
		setParams();
		setChinaParams();
	}

	public Params getKoreaParams() {
		setKoreaParams();
		return KoreaParams;
	}

	public void setKoreaParams() {
		String[] rank_type = { "0", "1", "2", "3", "4", "5" };
		String[] solo_party = { "S", "P" };
		String[] dcgroup = { "-1" };

		// RankType
		CommonType rankType = new CommonType("strClass", rank_type);
		CommonType soloParty = new CommonType("strType", solo_party);
		CommonType dcGroup = new CommonType("snum", dcgroup);

		Params ParamsValue = new Params(rankType, soloParty, dcGroup, null);
		KoreaParams = ParamsValue;
	}

	public Params getParams() {
		setParams();
		return Params;
	}

	public void setParams() {
		String[] rank_type = { "all", "1", "2", "3", "4", "5" };

		String[] solo_party = { "solo", "party" };
		String[] dcgroup = { "Elemental", "Gaia", "Mana", "Aether", "Primal", "Chaos" };

		String[] sub_type = { "125bf9c1198a3a148377efea9c167726d58fa1a5", "741ae8622fa496b4f98b040ff03f623bf46d790f", "c31f30f41ab1562461262daa74b4d374e633a790", "56d60f8dbf527ab9a4f96f2906f044b33e7bd349", "56f91364620add6b8e53c80f0d5d315a246c3b94",
				"eb7fb1a2664ede39d2d921e0171a20fa7e57eb2b", "46fcce8b2166c8afb1d76f9e1fa3400427c73203", "b16807bd2ef49bd57893c56727a8f61cbaeae008", "e8f417ab2afdd9a1e608cb08f4c7a1ae3fe4a441", "f50dbaf7512c54b426b991445ff06a6697f45d2a",
				"773aae6e524e9a497fe3b09c7084af165bef434d", "f28896f2b4a22b014e3bb85a7f20041452319ff2", "9ef51b0f36842b9566f40c5e3de2c55a672e4607" };
		String[] sub_type_name = { "paladin", "warrior", "darkknight", "whitemage", "scholar", "astrologian", "monk", "dragoon", "ninja", "bard", "machinist", "blackmage", "summoner" };

		// RankType
		CommonType rankType = new CommonType("rank_type", rank_type);
		CommonType soloParty = new CommonType("solo_party", solo_party);
		CommonType dcGroup = new CommonType("dcgroup", dcgroup);
		SubType subType = new SubType("sub_type", sub_type, sub_type_name);

		Params ParamsValue = new Params(rankType, soloParty, dcGroup, subType);
		Params = ParamsValue;
	}

	public Params getChinaParams() {
		setChinaParams();
		return ChinaParams;
	}

	public void setChinaParams() {
		String[] rank_type = { "all", "1", "2", "3", "4", "5" };
		String[] solo_party = { "1", "2" };
		String[] dcgroup = { "1", "2" };

		// RankType
		CommonType rankType = new CommonType("colosseumsolomatchrank", rank_type);
		CommonType soloParty = new CommonType("keyid", solo_party);
		CommonType dcGroup = new CommonType("areaid", dcgroup);

		Params ParamsValue = new Params(rankType, soloParty, dcGroup, null);
		ChinaParams = ParamsValue;
	}

	public List<Feast> getGlobalFeast() {
		return GlobalFeast;
	}

	public void setGlobalFeast(List<Feast> globalFeast) {
		GlobalFeast = globalFeast;
	}

	public List<Feast> getChinaFeast() {
		return ChinaFeast;
	}

	public void setChinaFeast(List<Feast> chinaFeast) {
		ChinaFeast = chinaFeast;
	}

	public List<Feast> getKoreaFeast() {
		return KoreaFeast;
	}

	public void setKoreaFeast(List<Feast> koreaFeast) {
		KoreaFeast = koreaFeast;
	}

	public List<Dead> getGlobalDead() {
		return GlobalDead;
	}

	public void setGlobalDead(List<Dead> globalDead) {
		GlobalDead = globalDead;
	}

	public List<Dead> getChinaDead() {
		return ChinaDead;
	}

	public void setChinaDead(List<Dead> chinaDead) {
		ChinaDead = chinaDead;
	}

	public List<Dead> getKoreaDead() {
		return KoreaDead;
	}

	public void setKoreaDead(List<Dead> koreaDead) {
		KoreaDead = koreaDead;
	}

	public void setChinaParams(Params chinaParams) {
		ChinaParams = chinaParams;
	}

	public void setKoreaParams(Params koreaParams) {
		KoreaParams = koreaParams;
	}

	public Date getLoggingTime() {
		return LoggingTime;
	}

	public void setLoggingTime(Date loggingTime) {
		LoggingTime = loggingTime;
	}

}
