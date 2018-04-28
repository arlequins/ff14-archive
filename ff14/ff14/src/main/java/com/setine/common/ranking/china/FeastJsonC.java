package com.setine.common.ranking.china;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)

public class FeastJsonC {
	private int Code;
	private String Message;
	private List<FeastDataC> Attach;
	private String Success;

	@JsonProperty("Code")
	public int getCode() {
		return Code;
	}

	@JsonProperty("Code")
	public void setCode(int code) {
		Code = code;
	}

	@JsonProperty("Message")
	public String getMessage() {
		return Message;
	}

	@JsonProperty("Message")
	public void setMessage(String message) {
		Message = message;
	}

	@JsonProperty("Attach")
	public List<FeastDataC> getAttach() {
		return Attach;
	}

	@JsonProperty("Attach")
	public void setAttach(List<FeastDataC> attach) {
		Attach = attach;
	}

	@JsonProperty("Success")
	public String getSuccess() {
		return Success;
	}

	@JsonProperty("Success")
	public void setSuccess(String success) {
		Success = success;
	}

}
