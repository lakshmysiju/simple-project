package user.example.login;


import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Blog")
public class FormWrite {

	@Id
	private String id;
	private String bid;
	private String userid;
	private String title;
	private String authorName;
	private String content;
	private String time;
	private String like;
	private List<String> likeduser;
	private String user;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getBid() {
		return bid;
	}
	public void setBid(String bid) {
		this.bid = bid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getLike() {
		return like;
	}
	public void setLike(String like) {
		this.like = like;
	}
	public List<String> getLikeduser() {
		return likeduser;
	}
	public void setLikeduser(List<String> likeduser) {
		this.likeduser = likeduser;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public FormWrite(String id, String bid, String userid, String title, String authorName, String content, String time,
			String like, List<String> likeduser, String user) {
		super();
		this.id = id;
		this.bid = bid;
		this.userid = userid;
		this.title = title;
		this.authorName = authorName;
		this.content = content;
		this.time = time;
		this.like = like;
		this.likeduser = likeduser;
		this.user = user;
	}
	public FormWrite() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
