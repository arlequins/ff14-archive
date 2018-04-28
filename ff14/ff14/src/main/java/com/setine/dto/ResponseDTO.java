package com.setine.dto;

public class ResponseDTO {
	private String msg;
	private Object result;
	private Object request;
	private int code;

	public ResponseDTO() {
	}

	public ResponseDTO(String msg, Object homeObject, Object request, int code) {
		this.msg = msg;
		this.result = homeObject;
		this.request = request;
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getResult() {
		return result;
	}

	public void setResult(Object result) {
		this.result = result;
	}

	public Object getRequest() {
		return request;
	}

	public void setRequest(Object request) {
		this.request = request;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

}
