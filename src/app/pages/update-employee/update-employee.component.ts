import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  editForm!: FormGroup;
  id: any;
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private myService = inject(EmployeesService);
  fb = inject(FormBuilder);
  employeeObj: Employee = {
    id: '',
    personName: '',
    lastName: '',
    position: '',
    salary: 0,
  };
  employeeDetails: any;
  employee: Employee;
  constructor() {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      upersonName: ['', Validators.required],
      ulastName: ['', Validators.required],
      uposition: ['', Validators.required],
      usalary: ['', Validators.required],
    });

    this.id = this.route.snapshot.paramMap.get('id');
   
  }
  getAllDetails(employee: Employee) {
    this.employeeDetails = employee;
  }
  updateData(id:string) {
    const { value } = this.editForm;
    this.employeeObj = {
      id: id,
      personName: value.upersonName,
      lastName: value.ulastName,
      position: value.uposition,
      salary: value.usalary,
    };

    this.myService.editEmployee(this.employee, this.employeeObj).then(() => {
      alert('Note Updated Sucessfully');
      this.editForm.reset();
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
