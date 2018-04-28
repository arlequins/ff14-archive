package com.setine.db.mongo.model;

public class BoardInfo {
	private int id;
	private int limit;
	private int cPage = 1;
	private long totalPageCount;
	private long totalCount;
	private String question;
	private String writer;
	private String content;
	private String tableName;
	private int delCheck;
	private int sType;

	public BoardInfo() {
	}

	public BoardInfo(int path, String TARGET) {
		this.id = path;
		this.tableName = TARGET;
	}

	public BoardInfo(int sType, String question, String board_path) {
		this.sType = sType;
		if (sType == 1) {
			this.question = question;
		} else if (sType == 2) {
			this.writer = question;
		}
		this.tableName = board_path;
	}

	public BoardInfo(String board_path) {
		this.tableName = board_path;
	}

	public BoardInfo(int limit, int cPage, String question, int sType) {
		this.sType = sType;
		if (sType == 1) {
			this.question = question;
		} else if (sType == 2) {
			this.writer = question;
		}
		this.limit = limit;
		this.cPage = cPage;
	}

	public BoardInfo(int limit, int cPage, String question) {
		this.limit = limit;
		this.cPage = cPage;
		this.question = question;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public int getcPage() {
		return cPage;
	}

	public void setcPage(int cPage) {
		this.cPage = cPage;
	}

	public long getTotalPageCount() {
		return totalPageCount;
	}

	public void setTotalPageCount(long totalPageCount) {
		this.totalPageCount = totalPageCount;
	}

	public long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(long totalCount) {
		this.totalCount = totalCount;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTableName() {
		return tableName;
	}

	public void setTableName(String tableName) {
		this.tableName = tableName;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public int getDelCheck() {
		return delCheck;
	}

	public void setDelCheck(int delCheck) {
		this.delCheck = delCheck;
	}

	public int getsType() {
		return sType;
	}

	public void setsType(int sType) {
		this.sType = sType;
	}

}
