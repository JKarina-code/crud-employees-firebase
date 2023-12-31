import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/core/service/employees.service';
@Component({
  selector: 'app-card-emply',
  templateUrl: './card-emply.component.html',
  styleUrls: ['./card-emply.component.css'],
})
export class CardEmplyComponent implements OnInit {
  @Input() employee: Employee;
  @Input() id:string;
  style = {
    cursor: 'pointer',
    height: '30px',
    color: 'blue',
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private myService: EmployeesService
  ) {}

  ngOnInit(): void {}
  characteristics = [''];
  addCharact(newCharact: string) {
    this.characteristics.push(newCharact);
  }

  deleteData(employee: Employee) {
    let decision = confirm(`Are you sure want to delete to:  ${employee.personName}?`)
    decision && this.myService.deleteEmployee(employee);
  }
}
