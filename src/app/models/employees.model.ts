import { GetAllEmployeeResponse as GetAllEmployeeResponseType, Employee as EmployeeType } from "../types/employees.type";





export class EmployeeData {
    //data:Array<Employee>;
    private data!: Employee[];
    private message!: string;
    private status!: string;

    deserialize(input:GetAllEmployeeResponseType):EmployeeData{
        Object.assign(this,input)

        // this.message=input.message;
        // this.status=input.status;
        // this.data=input.data;   array of type employeee
        this.data=[];
        input.data.forEach((emp)=>{
            this.data.push(new Employee().deserialize(emp))
        })
        
        return this;
    }

    get getData(){
        return this.data;

    }
    set setData(data:Employee[]){
     this.data= data;

    }
    get getMessage(){
        return this.message;
    }
    get getStatus(){
        return this.status;
    }

}
export class Employee {
    private employee_age!: number;
    private first_name!: string;
    private last_name!: string;
    private full_name!: string;
    private  employee_salary!: number;
    private id!: number;
    private profile_image!: string;
    deserialize(input:EmployeeType):Employee{
        Object.assign(this,input);
        //this.full_name = input.first_name+" " +input.last_name;
        this.full_name = `${input.first_name} ${input.last_name}`
        return this;
    }
    get getEmployeeAge(){
        return this.employee_age;
    }
    get getFirstName(){
        return this.first_name;
    }
    get getLastName(){
        return this.last_name;
    }
    get getFullName(){
        return this.full_name;
    }
    get getEmployeeSalary(){
        return this.employee_salary;
    }
    get getId(){
        return this.id;
    }
    get getProfileImage(){
        return this.profile_image;
    }

}
