package user.example.login;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepository extends MongoRepository<FormWrite,String > {

	@Query(value="{isNum:?0}")
	List<FormWrite>findByIsb(String getIsNum);
	
	List<FormWrite>findByuserid(String userid);
	
	
}

