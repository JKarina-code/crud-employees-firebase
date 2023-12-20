import { Injectable } from '@angular/core';
import { Employee } from '../model/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor() {}
  //Employee Service
  employess: Employee[] = [
    new Employee('Jymma', 'Mogollon', 'developer', 3500),
    new Employee('Ana', 'Tavra', 'president', 5500),
    new Employee('Maria', 'Fernadez', 'UI', 7500),
    new Employee('Laura', 'Lopez', 'president', 2500),
  ];

  addEmployeeService(employee: Employee) {
    this.employess.unshift(employee);
  }

  //Alert
  showAlert(msg: string) {
    alert(msg);
  }
  // Employee with your index
  findEmployee(index: number) {
    let employee: Employee = this.employess[index];
    return employee;
  }

  updateEmployee(index: number, upEmployee: Employee) {
    let employeeChanged = this.employess[index];

    employeeChanged.personName = upEmployee.personName;
    employeeChanged.lastName = upEmployee.lastName;
    employeeChanged.position = upEmployee.position;
    employeeChanged.salary = upEmployee.salary;
  }

  deleteEmployee(index: number) {
    this.employess.splice(index, 1);
  }
}
