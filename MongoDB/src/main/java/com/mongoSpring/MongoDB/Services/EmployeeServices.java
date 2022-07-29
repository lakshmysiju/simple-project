package com.mongoSpring.MongoDB.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mongoSpring.MongoDB.Model.Employee;
import com.mongoSpring.MongoDB.Repository.EmployeeRepository;

@Service
public class EmployeeServices {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public Employee saveorup(Employee emp) {
		return employeeRepository.save(emp);
		
	}
	
	
	public List<Employee>findAll(){
		return employeeRepository.findAll();
	}
	public void delete(Employee emp) {
		employeeRepository.delete(emp);
	}
}
