package user.example.login;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.ls.LSOutput;

@RestController
@CrossOrigin("*")
public class LoginController {
	
	@Autowired
	private LoginReopository loginRepository;
	@Autowired
	private FormRepository formRepository;
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/userList")
	public int users()
	{
		List<LoginUser> user=loginRepository.findAll();
		int num=user.size();
	     System.out.println(num);

		return num;
}
	
	@PostMapping("/create")
	public void createnew(@RequestBody LoginUser loginUser) {
		loginRepository.save(loginUser);
	}
	
	@GetMapping( "/findAll")
public List <LoginUser>findAll() {
	return loginRepository.findAll();
	
}
	@PostMapping("/Add")
	public LoginUser addNew(@RequestBody LoginUser loginUser )
	{
		String email=loginUser.getEmail();
		String password=loginUser.getPassword();
		System.out.println(email);
		System.out.println(password);
		List<LoginUser> data=loginRepository.findAll();
		
		LoginUser v=null;
		for(int i=0;i<data.size();i++) {
			LoginUser x=data.get(i);
			String email1=x.getEmail();
			
			String password1=x.getPassword();
			
			System.out.println(x.getEmail());
			 System.out.println(x.getPassword());
			
			if(Objects.equals(email1,email) && Objects.equals(password1,password))
			{
				v=x;
				break;
//			    System.out.println("true");
			}
			else
			{
				v=null;
				
			}
			
		}
		return v;
			
		}

	
	@GetMapping("/count")
	public int blogList()
	{
		List<FormWrite> blog=formRepository.findAll();
		int num=blog.size();
		return num;
}
	@PostMapping("/newBlog")
	public void newBlog(@RequestBody FormWrite formWrite){
		formRepository.save(formWrite);
	}
	@GetMapping("/gellAllBlogs")
	public List<FormWrite> findallBlogs(){
		
		return formRepository.findAll();
	}
	@GetMapping("/blogs/{userid}")
	public List<FormWrite> blobyid(@PathVariable("userid")String userid){
		List<FormWrite> variable=formRepository.findByuserid(userid);
		return variable;
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateinfo(@PathVariable String id,
	        @RequestBody FormWrite spring)
	{
		Optional<FormWrite> data=formRepository.findById(id);
		
		FormWrite form=data.get();
		form.setBid(spring.getBid());
		form.setTitle(spring.getTitle()); 
		form.setAuthorName(spring.getAuthorName());
		form.setContent(spring.getContent());
		

	    formRepository.save(form);
	    return new ResponseEntity<>("Data Updated",HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteBook(@PathVariable ("id") String id)
	{
		formRepository.deleteById(id);
		return "Deleted";
	}
	
	@GetMapping("/findid/{id}")
	public Optional<UserProfile> getBlog(@PathVariable String id)
	{
	return userRepository.findById(id);
	}
	 @GetMapping("/bloglist")
     public  int bloglistnumber() {
     	
 	     List<FormWrite> data=formRepository.findAll(); 
 	     int num=data.size();
 	     System.out.println(num);
     	return num;
     }	
	 @GetMapping("/checkemail/{email}")
     public String checkemail(@PathVariable("email") String email) {
   	  Optional<LoginUser> variable = loginRepository.findByemail(email);
   	  String check = null;
   	  if (variable.isPresent()) {
   		   check="mail is already used" ;
   	  }
         return check;
      
     }
	
}
