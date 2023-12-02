package com.university.of.hull.eportal.datamodel.login;

import com.university.of.hull.eportal.dataentity.Clubs;
import com.university.of.hull.eportal.dataentity.Users;

public class LoginResponse {

	public LoginResponse(String message,String token, Users users) {
		this.message = message;
		this.token = token;
		this.users = users;
	}

	public LoginResponse(String message,String token, Clubs clubs) {
		this.message = message;
		this.token = token;
		this.clubs = clubs;
	}

	private String token;
	private String message;
	private Users users;
	private Clubs clubs;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
	}

	public Clubs getClubs() {
		return clubs;
	}

	public void setClubs(Clubs clubs) {
		this.clubs = clubs;
	}
}
