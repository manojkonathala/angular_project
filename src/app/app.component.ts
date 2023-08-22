import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from './types/employees.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'Employees'
  // showEmployee= true;

  employees!: Employee[];


  constructor(private employeesService: EmployeesService){}

  ngOnInit() {
      this.employeesService.getAllEmployee().subscribe((employees)=>{
        this.employees=employees.data;
      });
      // this.employeesService.getEachEmployeeDetails(1).subscribe((EACH_EMPLOYEE:any)=>{
      //   console.log(EACH_EMPLOYEE)
      // });
      // this.employeesService.createEmployee().subscribe((newEmployee:any)=>{
      //   console.log(newEmployee.data)
      // });
      // this.employeesService.updateEmployee(1).subscribe((updateEmployee)=>{
      //   console.log(updateEmployee)
      // });
      // this.employeesService.deleteEmployee(1).subscribe((deleteEmployee)=>{
      //   console.log(deleteEmployee)
      // });
  }
}
