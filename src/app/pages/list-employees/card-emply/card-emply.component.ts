import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../model/empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/service/employees.service';
@Component({
  selector: 'app-card-emply',
  templateUrl: './card-emply.component.html',
  styleUrls: ['./card-emply.component.css'],
})
export class CardEmplyComponent implements OnInit {
  @Input() employee: Employee;
  @Input() index: number;

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

  deleteData() {
    this.myService.deleteEmployee(this.index);
    let employee = this.employee.personName;
    alert(`Employed : ${employee} deleted`);
    this.router.navigate(['/']);
  }
}
