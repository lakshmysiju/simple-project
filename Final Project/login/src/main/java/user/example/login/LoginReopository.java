package user.example.login;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginReopository extends MongoRepository<LoginUser, String>{
	
	Optional<LoginUser> findByemail(String email);

}
