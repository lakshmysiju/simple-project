package user.example.login;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "register")
public class LoginUser {
	@Id
	private String id;
	private String uid;
	private String username;
	private String  email;
	private String dateOfBirth;
	private String password;
	private String access;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getAccess() {
		return access;
	}
	public void setAccess(String access) {
		this.access = access;
	}
	public LoginUser(String id, String uid, String username, String email, String dateOfBirth, String password,
			String access) {
		super();
		this.id = id;
		this.uid = uid;
		this.username = username;
		this.email = email;
		this.dateOfBirth = dateOfBirth;
		this.password = password;
		this.access = access;
	}
	public LoginUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "LoginUser [id=" + id + ", uid=" + uid + ", username=" + username + ", email=" + email + ", dateOfBirth="
				+ dateOfBirth + ", password=" + password + ", access=" + access + "]";
	}


	
	
	
	

	
}