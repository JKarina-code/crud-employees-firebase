export class Employee {
  constructor(
    personName: string,
    lastName: string,
    position: string,
    salary: number
  ) {
    this.personName = personName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
  }

  personName: string = '';
  lastName: string = '';
  position: string = '';
  salary: number = 0;
}
