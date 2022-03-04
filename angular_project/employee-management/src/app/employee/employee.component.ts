import { Component, OnInit } from '@angular/core';
import { Employee, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }
  
  handleSuccessfulResponse(response: Employee[])
{
    this.employees=response;
}

}
