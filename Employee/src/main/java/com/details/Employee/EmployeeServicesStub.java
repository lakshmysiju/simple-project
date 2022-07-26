package com.details.Employee;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmployeeServicesStub {
	
private static Map<Long,Employee> employees=new HashMap<>();
private static Long index =5L;

static {
	Employee employee1 =new Employee(1L,"Ajay","9456289",20000L);
	Employee employee2 =new Employee(2L,"Manu","28736881",30000L);
	Employee employee3 =new Employee(3L,"Remya","7665457",1000L);
	Employee employee4 =new Employee(4L,"Raj","97854327",50000L);
	Employee employee5 =new Employee(5L,"Ram","9456289",9000L);
	employees.put(1L,employee1);
	employees.put(2L,employee2);
	employees.put(3L,employee3);
	employees.put(4L,employee4);
	employees.put(5L,employee5);
}

	

public static List<Employee> getAllEmployees(){
	return new ArrayList<>(employees.values());
	
}
public static Employee getEmployeeDetails(Long employeeId) {
	return employees.get(employeeId);
	
}
public static Employee addEmployee (Employee employee) {
	index+=1;
	employee.setId(index);
	employees.put(index,employee);
	return employee;
}
public static Employee updateEmployee (Long employeeId,Employee employee) {
	
	employee.setId(employeeId);
	employees.put(employeeId,employee);
	return employee;
}
public static Employee deleteEmployeeDeetails(Long employeeId) {
	return employees.remove(employeeId);


}

}