import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college-admin',
  templateUrl: './college-admin.component.html',
  styleUrls: ['./college-admin.component.css']
})
export class CollegeAdminComponent implements OnInit {
name:string='simadri';
  constructor(public router:Router,public service:LoginService) { }
  ngOnInit() {
  }
  navigate(componentURL) {
    this.router.navigate(['collegehome',componentURL]);   
  }
  logout(){
    this.service.loginStatusCollegeAdmin=false;
     this.router.navigate(['/','login'])
   }
}
