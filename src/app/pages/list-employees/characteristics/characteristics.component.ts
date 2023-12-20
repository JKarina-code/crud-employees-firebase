import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { EmployeesService } from 'src/app/service/employees.service';
@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css'],
})
export class CharacteristicsComponent {
  @Output() newCharactEvent = new EventEmitter<string>();
  constructor(private myService: EmployeesService) {}
  addNewCharact(value: string) {
    this.myService.showAlert(value)
    this.newCharactEvent.emit(value);
  }
}

