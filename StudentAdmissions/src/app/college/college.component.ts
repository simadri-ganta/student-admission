import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor(public service: LoginService,public router:Router){}

  ngOnInit() {
  }
  collegeDetails={college_name:null,college_code:null,college_rank:null};
  addCollege(){
    this.service.addCollege(this.collegeDetails);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/','home', 'newcollege'])
  }

}
