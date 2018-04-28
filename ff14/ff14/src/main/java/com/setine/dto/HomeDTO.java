package com.setine.dto;

import java.util.ArrayList;

import com.setine.db.mongo.model.Module;
import com.setine.db.mongo.model.Notice;
import com.setine.db.mongo.model.NoticeArray;

public class HomeDTO {
	ArrayList<Notice> noticeList;
	ArrayList<Module> kbanner;
	ArrayList<Module> kImage;
	NoticeArray ffge;
	NoticeArray ffgj;

	public HomeDTO(ArrayList<Notice> noticeList, ArrayList<Module> kbanner, ArrayList<Module> kImage) {
		this.noticeList = noticeList;
		this.kbanner = kbanner;
		this.kImage = kImage;
	}

	public HomeDTO() {
	}

	public ArrayList<Notice> getNoticeList() {
		return noticeList;
	}

	public void setNoticeList(ArrayList<Notice> noticeList) {
		this.noticeList = noticeList;
	}

	public ArrayList<Module> getKbanner() {
		return kbanner;
	}

	public void setKbanner(ArrayList<Module> kbanner) {
		this.kbanner = kbanner;
	}

	public ArrayList<Module> getkImage() {
		return kImage;
	}

	public void setkImage(ArrayList<Module> kImage) {
		this.kImage = kImage;
	}

	public NoticeArray getFfge() {
		return ffge;
	}

	public void setFfge(NoticeArray ffge) {
		this.ffge = ffge;
	}

	public NoticeArray getFfgj() {
		return ffgj;
	}

	public void setFfgj(NoticeArray ffgj) {
		this.ffgj = ffgj;
	}
}
