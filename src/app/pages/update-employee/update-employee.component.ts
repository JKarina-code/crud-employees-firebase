import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Employee } from '../../model/empleado.model';
import { EmployeesService } from 'src/app/service/employees.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  form: FormGroup;
  //List employees
  listEmployess: Employee[] = [];
  index: number;
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private myService = inject(EmployeesService);
  fb = inject(FormBuilder);
  constructor() {}

  ngOnInit(): void {
    this.listEmployess = this.myService.employess;
    this.index = this.route.snapshot.params['id'];
    let employee: Employee = this.myService.findEmployee(this.index);
    this.form = this.fb.group({
      cpersonName: employee.personName,
      clastName: employee.lastName,
      cposition: employee.position,
      csalary: employee.salary,
    });
    console.log(this.form.value.csalary);
  }

  updateData() {
    const upEmployee: Employee = {
      salary: this.form.value.csalary,
      personName: this.form.value.cpersonName,
      lastName: this.form.value.clastName,
      position: this.form.value.cposition,
    };

    this.myService.updateEmployee(this.index, upEmployee);
    this.router.navigate(['/']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
