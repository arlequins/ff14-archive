package com.setine.springsecurity.service;

import com.setine.springsecurity.model.User;

public interface UserService {

	void save(User user);
	
	User findById(int id);
	
	User findBySso(String sso);
	
}