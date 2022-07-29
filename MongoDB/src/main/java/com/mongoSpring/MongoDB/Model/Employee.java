package com.mongoSpring.MongoDB.Model;
import lombok.Data;
@Data
public class Employee {

	private String id;
	private String name;
	private String email;
	public String getId() {
		return id;
	
	}
	public Employee(String id, String name, String email) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
	}

	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}


}
