import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmployeeService} from "../service/employee.service";
@Component({
    selector: 'employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css']
  })
  export class EmployeeAddComponent implements OnInit {

    loading = false;
    constructor(private formBuilder: FormBuilder,private router: Router,private employeeService:EmployeeService) {
        
     }
  
    employeeAddForm: FormGroup;
  
  
    ngOnInit() {
  
      this.employeeAddForm = this.formBuilder.group({
        id: [],
        name: ['', Validators.required],
        salary: ['', Validators.required],
        department: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]
      });
  
      }
  
    onSubmit() {
        
     this.loading = true;   
  var e =  this.employeeService.createEmployee(this.employeeAddForm.value)
        .subscribe( data => {
            console.log(data);
            this.loading = false;
          this.router.navigate(['login']);
        });
    }
  
  }