import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  constructor(public servive: LoginService, public router: Router) { }

  ngOnInit() {
  }
  public list: [] = [];
  public collegecode: [] = [];
  public collegename: [] = [];
  public count: number = 0;
  deatils = {
    name: '',
    board: '',
    marks: '',
    gpa: '',
    percentage: '',
    school: '',
    department: '',
    college: '',
    college_choice2: ''

  }

  changed() {
    this.count++;
    if (this.count == 1) {
      this.servive.getCollegeList().subscribe(data => {

        this.list = data;
        for (let i = 2; i < this.list.length; i++) {
          if (i % 2 == 0) {
            this.collegecode.push(this.list[i])
          }
          else {
            this.collegename.push(this.list[i]);
          }
        }
      });
    }
  }
  newapplicant() {
    this.servive.newApplication(this.deatils);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/', 'application'])

  }

}
