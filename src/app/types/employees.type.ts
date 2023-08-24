

export interface GetAllEmployeeResponse {
    //data:Array<Employee>;
    data: Employee[];
    message: string;
    status: string;


}

export interface Employee {
    employee_age: number;
    first_name: string;
    last_name: string;
    employee_salary: number;
    id: number;
    profile_image: string;

}