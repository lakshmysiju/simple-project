package user.example.login;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "my profile")
public class UserProfile {
	
	@Id
	private String id;
	private String bid;
	private String title;
	private String authorName;
	private String content;
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
	public UserProfile(String id, String bid, String title, String authorName, String content) {
		super();
		this.id = id;
		this.bid = bid;
		this.title = title;
		this.authorName = authorName;
		this.content = content;
	}
	@Override
	public String toString() {
		return "UserProfile [id=" + id + ", bid=" + bid + ", title=" + title + ", authorName=" + authorName
				+ ", content=" + content + "]";
	}
	
	

}
