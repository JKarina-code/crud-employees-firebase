import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeesService } from 'src/app/service/employees.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class EmployeesListComponent implements OnInit {
  //List employees
  listEmployess: Employee[] = [];
  constructor(private myService: EmployeesService) {}

  ngOnInit(): void {
    this.getAllEmployees()
  }
  getAllEmployees() {
    this.myService.getEmployees().subscribe((res: Employee[]) => {
      this.listEmployess = res
    });
  }
}
