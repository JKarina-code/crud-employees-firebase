import { Injectable, inject } from '@angular/core';
import { Employee } from '../../model/employee.model';
import {
  Firestore,
  addDoc,
  doc,
  collection,
  collectionData,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  fs: Firestore = inject(Firestore);
  constructor() {}
  // Alert
  showAlert(msg: string) {
    alert(msg);
  }


  // Add employee
  addEmployeeService(employee: Employee) {
    employee.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Employees'), employee);
  }
  // Get all employees
  getEmployees(): Observable<Employee[]> {
    const employeesCollection = collection(this.fs, 'Employees');
    return collectionData(employeesCollection, { idField: 'id' }) as Observable<
      Employee[]
    >;
  }

  //Update Employee
  editEmployee(employee: Employee, employees:any) {
    let employeeEdit = doc(this.fs, `Employees/${employee.id}`);
    return updateDoc(employeeEdit, employees);
  }
  //Delete Employee
  deleteEmployee(employee: Employee) {
    let employeeRef = doc(this.fs, `Employees/${employee.id}`);
    return deleteDoc(employeeRef);
  }
}
