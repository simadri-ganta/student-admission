import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departmentwise',
  templateUrl: './departmentwise.component.html',
  styleUrls: ['./departmentwise.component.css']
})
export class DepartmentwiseComponent implements OnInit {

  constructor(public service: LoginService, public router: Router) { }
  public student = {
    alloteddepartment: '',
    board: '',
    collegecode: '',
    collegename: '',
    department: '',
    gpa: '',
    joineddate: '',
    marks: '',
    name: '',
    percentage: '',
    school: ''
  }
  public detailsOfStudents: {} = {
    0: [this.student],
    1: [this.student],
    2: [this.student],
    3: [this.student]
  }
  public datavalue: Observable<{}>

  ngOnInit() {
    this.datavalue = this.service.getDeparmenttList()
    this.datavalue.subscribe(
      (data: any) => {
        this.detailsOfStudents = data;
      });
  }

}
