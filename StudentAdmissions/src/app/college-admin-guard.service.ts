import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CollegeAdminGuardService {

  constructor(public service:LoginService,public router:Router) { }
  canActivate():boolean{
    if(this.service.loginStatusCollegeAdmin){
      return true;
    }
    else{
      this.router.navigate(['/','login'])
      return false;
    }
    
  
  }
}
