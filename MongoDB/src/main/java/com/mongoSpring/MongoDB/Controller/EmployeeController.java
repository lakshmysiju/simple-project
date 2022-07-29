package com.mongoSpring.MongoDB.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mongoSpring.MongoDB.Model.Employee;
import com.mongoSpring.MongoDB.Services.EmployeeServices;
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeServices employeeServices;
	
	@PostMapping("/save")
	public ResponseEntity<Employee> saveorup(@RequestBody Employee emp){
		employeeServices.saveorup(emp);
			return new ResponseEntity<Employee>(employeeServices.saveorup(emp),HttpStatus.ACCEPTED);
				
	}
	@GetMapping("/findall")
	public ResponseEntity<List<Employee>> findAll(){
		return new ResponseEntity<List<Employee>>(employeeServices.findAll(),HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> delete(@RequestBody Employee emp){
		employeeServices.delete(emp);
			return new ResponseEntity<String>("Deleted",HttpStatus.ACCEPTED);
			
		
		
	}
}
