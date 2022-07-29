package com.mongoSpring.MongoDB.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongoSpring.MongoDB.Model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee,String>{

	void put(String id, Employee emp);

}
