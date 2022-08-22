package user.example.login;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepository extends MongoRepository<FormWrite,String > {

	@Query(value="{isNum:?0}")
	List<FormWrite>findByIsb(String getIsNum);
	
	List<FormWrite>findByuserid(String userid);
	
//	@Query(value="{bid:?0}")
//	List<FormWrite>findBybid(String bid);
	
	Optional<FormWrite>findById(String id);
	
	
}

