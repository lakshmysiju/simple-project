package com.details.Employee;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.fasterxml.jackson.core.sym.Name;
@RestController
public class EmployeeController {
	private Long employeeId;
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return EmployeeServicesStub.getAllEmployees(); 
	}
	@GetMapping("/employees/{employeeId}")
	public Employee getEmployeeDetails(@PathVariable Long employeeId){
		return EmployeeServicesStub.getEmployeeDetails(employeeId); 
	}
	 
	
	@GetMapping("/employee/find")
	public Employee getEmployeeDetail(@RequestParam Long Id ){
		return EmployeeServicesStub.getEmployeeDetails(Id); 
	}
	@PostMapping("/newEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return EmployeeServicesStub.addEmployee(employee);
	}
	@PutMapping("/updateEmployee/{employeeId}")
	public Employee updateEmployee(@PathVariable Long employeeId,@RequestBody Employee employee) {
		return EmployeeServicesStub.updateEmployee(employeeId,employee);
	
	}
	@DeleteMapping("/removeEmployee/{employeeId}")
	public Employee deleteEmployee(@PathVariable Long employeeId ) {
		return EmployeeServicesStub.deleteEmployeeDeetails(employeeId);
		
	}
	
}
