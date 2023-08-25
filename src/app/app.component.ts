import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from './models/employees.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'Employees'
  // showEmployee= true;

  employees!: Employee[];
  showEmployee=false

  constructor(private employeesService: EmployeesService){}

  ngOnInit() {
      this.employeesService.getAllEmployee().subscribe((employees)=>{
        this.employees=employees.getData;
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
  viewEmployee(event : Event){
    // console.log(event);
    // alert('Hi Mama');
    // Window object(TO Access Browser Access) vs Document Object(To access HTML )
    // window.scrollTo(0,0)
    // Scroll to the end of the page
    // window.scrollTo(0, document.body.scrollHeight);
    this.showEmployee=true;
//testing

  }
}
