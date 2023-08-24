import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {EMPLOYEES} from './empoyees.constants'
import { GetAllEmployeeResponse } from "./types/employees.type";
import { map } from "rxjs";
import { EmployeeData } from "./models/employees.model";

@Injectable()
export class EmployeesService{
//TODO get all employees 

constructor(private http:HttpClient){}

// getAllEmployee(){
//      this.http.get(EMPLOYEES.ALL_EMPLOYEES,{responseType: 'json'}).subscribe()
// }
// getAllEmployee(){
//     return this.http.get(EMPLOYEES.ALL_EMPLOYEES,{responseType: 'json'});
// }
getAllEmployee(){
    //return this.http.get<GetAllEmployeeResponse>(EMPLOYEES.ALL_EMPLOYEES,{responseType: 'json'});
    return this.http.get<GetAllEmployeeResponse>(EMPLOYEES.ALL_EMPLOYEES,{responseType: 'json'}).pipe(
        map((data)=>{
             data.message = "Hello buddies"
             return data
        }),
        map((data)=>{
            return new EmployeeData().deserialize(data)
        })
    );
}

//TODO get each employee details
getEachEmployeeDetails(id:number){
    return this.http.get(EMPLOYEES.EACH_EMPLOYEE.replace("<<id>>",id.toString()),{responseType: 'json'});
}

//TODO Create Employee

createEmployee(){
    var request= {"name":"test","salary":"123","age":"23"}
    return this.http.post(EMPLOYEES.CREATE_EMPLOYEE,request,{responseType: 'json'})
}

//TODO Update employee

updateEmployee(id:number){
    var request=	{"name":"test","salary":"123","age":"23"}
    return this.http.put(EMPLOYEES.UPDATE_EMPLOYEE.replace("<<id>>",id.toString()),request,{responseType: 'json'});
}


//TODO delete employee

deleteEmployee(id:number){
    return this.http.delete(EMPLOYEES.DELETE_EMPLOYEE.replace("<<id>>",id.toString()),{responseType: 'json'});
}

}