package com.setine.db.mongo.model;

public class NavData {
	private String navLink;
	private String navText;

	public NavData(String link, String text) {
		this.navLink = link;
		this.navText = text;
	}

	public String getNavLink() {
		return navLink;
	}

	public void setNavLink(String navLink) {
		this.navLink = navLink;
	}

	public String getNavText() {
		return navText;
	}

	public void setNavText(String navText) {
		this.navText = navText;
	}

}
