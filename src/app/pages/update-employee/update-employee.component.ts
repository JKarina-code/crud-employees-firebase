import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Employee } from '../../model/employee.model';
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
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  form: FormGroup;
  id: any;
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private myService = inject(EmployeesService);
  fb = inject(FormBuilder);

  constructor() {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

  updateData() {}

  goHome() {
    this.router.navigate(['/']);
  }
}
