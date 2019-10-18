import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Login } from '../login';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {

  }
  constructor(public service: LoginService, public router: Router) { }

  public name: string = '';
  public password: string = '';
  public details: Array<Login>;

  public d: Login[];
  onSubmit():any {
    let Log = new Login();
    Log.userId = this.name;
    Log.password = this.password;
   
    let data=this.service.validate(Log);
    this.router.navigate(['/login'])
    return data;

  }
}
