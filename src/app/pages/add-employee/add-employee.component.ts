import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../../model/empleado.model';
import { EmployeesService } from 'src/app/service/employees.service';
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
  //List employees
  listEmployess: Employee[] = [];
  private router = inject(Router);
  private myService = inject(EmployeesService);
  fb = inject(FormBuilder);
  constructor() {}

  ngOnInit(): void {
    this.listEmployess = this.myService.employess;

    this.formAdd = this.fb.group({
      cpersonName: ['', Validators.required],
      clastName: ['', Validators.required],
      cposition: ['', Validators.required],
      csalary: ['', Validators.required],
    });
  }

  AddEmployee() {
    const employee: Employee = {
      personName: this.formAdd.value.cpersonName,
      lastName: this.formAdd.value.clastName,
      position: this.formAdd.value.cposition,
      salary: this.formAdd.value.csalary,
    };
    this.myService.showAlert('Added new employee' + ':' + employee.personName);
    this.myService.addEmployeeService(employee);

    this.router.navigate(['/']);
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
