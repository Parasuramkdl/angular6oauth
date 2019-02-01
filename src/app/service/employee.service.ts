import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "../model/employee.model";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/employees';

  getEmployees() {
    
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(this.baseUrl + '/' + id);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.baseUrl + '/' + employee.id, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  } 
}
