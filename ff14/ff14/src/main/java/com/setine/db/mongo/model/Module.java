package com.setine.db.mongo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Module {
	private int areaid;
	private String title;
	private String summary;
	private String thumbnail;
	private String moduleorder;
	private String actiontype;
	private String actionscript;
	private String typeid;
	private String categoryid;
	private String charname;
	private String writedate;
	private String moduletype;
	private String begindate;
	private String enddate;
	private String windowsize;

	@JsonProperty("AREAID")
	public int getAreaid() {
		return areaid;
	}

	@JsonProperty("AREAID")
	public void setAreaid(int areaid) {
		this.areaid = areaid;
	}

	@JsonProperty("TITLE")
	public String getTitle() {
		return title;
	}

	@JsonProperty("TITLE")
	public void setTitle(String title) {
		this.title = title;
	}

	@JsonProperty("SUMMARY")
	public String getSummary() {
		return summary;
	}

	@JsonProperty("SUMMARY")
	public void setSummary(String summary) {
		this.summary = summary;
	}

	@JsonProperty("THUMBNAIL")
	public String getThumbnail() {
		return thumbnail;
	}

	@JsonProperty("THUMBNAIL")
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	@JsonProperty("MODULEORDER")
	public String getModuleorder() {
		return moduleorder;
	}
	@JsonProperty("MODULEORDER")
	public void setModuleorder(String moduleorder) {
		this.moduleorder = moduleorder;
	}
	@JsonProperty("ACTIONTYPE")
	public String getActiontype() {
		return actiontype;
	}
	@JsonProperty("ACTIONTYPE")
	public void setActiontype(String actiontype) {
		this.actiontype = actiontype;
	}
	@JsonProperty("ACTIONSCRIPT")
	public String getActionscript() {
		return actionscript;
	}
	@JsonProperty("ACTIONSCRIPT")
	public void setActionscript(String actionscript) {
		this.actionscript = actionscript;
	}
	@JsonProperty("TYPEID")
	public String getTypeid() {
		return typeid;
	}
	@JsonProperty("TYPEID")
	public void setTypeid(String typeid) {
		this.typeid = typeid;
	}
	@JsonProperty("CATEGORYID")
	public String getCategoryid() {
		return categoryid;
	}
	@JsonProperty("CATEGORYID")
	public void setCategoryid(String categoryid) {
		this.categoryid = categoryid;
	}
	@JsonProperty("CHARNAME")
	public String getCharname() {
		return charname;
	}
	@JsonProperty("CHARNAME")
	public void setCharname(String charname) {
		this.charname = charname;
	}
	@JsonProperty("WRITEDATE")
	public String getWritedate() {
		return writedate;
	}
	@JsonProperty("WRITEDATE")
	public void setWritedate(String writedate) {
		this.writedate = writedate;
	}
	@JsonProperty("MODULETYPE")
	public String getModuletype() {
		return moduletype;
	}
	@JsonProperty("MODULETYPE")
	public void setModuletype(String moduletype) {
		this.moduletype = moduletype;
	}
	@JsonProperty("BEGINDATE")
	public String getBegindate() {
		return begindate;
	}
	@JsonProperty("BEGINDATE")
	public void setBegindate(String begindate) {
		this.begindate = begindate;
	}
	@JsonProperty("ENDDATE")
	public String getEnddate() {
		return enddate;
	}
	@JsonProperty("ENDDATE")
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	@JsonProperty("WINDOWSIZE")
	public String getWindowsize() {
		return windowsize;
	}
	@JsonProperty("WINDOWSIZE")
	public void setWindowsize(String windowsize) {
		this.windowsize = windowsize;
	}
}
