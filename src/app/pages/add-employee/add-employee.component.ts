import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeesService } from 'src/app/core/service/employees.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  formAdd: FormGroup;
  private router = inject(Router);
  private myService = inject(EmployeesService);
  fb = inject(FormBuilder);
  employeeObj: Employee = {
    id: '',
    personName: '',
    lastName: '',
    position: '',
    salary: 0,
  };
  constructor() {}

  ngOnInit(): void {
 
    this.formAdd = this.fb.group({
      cpersonName: ['', Validators.required],
      clastName: ['', Validators.required],
      cposition: ['', Validators.required],
      csalary: ['', Validators.required],
    });
  }

  createEmployee() {
    const { value } = this.formAdd;
    (this.employeeObj.id = ''),
      (this.employeeObj.personName = value.cpersonName),
      (this.employeeObj.lastName = value.clastName),
      (this.employeeObj.position = value.cposition),
      (this.employeeObj.salary = value.csalary);
    this.myService.addEmployeeService(this.employeeObj).then((employee) => {
      if (employee) {
        alert('Employee added sucessfull');
        this.formAdd.reset();
      }
    });
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
