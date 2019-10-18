import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from './login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient, public router: Router) { }



  public collegeCode: string;
  public 
  
loginStatusAdmin:boolean=false;
loginStatusCollegeAdmin:boolean=false;

  confirm():any {
    return this.client.get('http://localhost:8087/Confirm_allotement_rest/' + this.collegeCode, { observe: 'response' });
  }
  statusCheck(studentDetails: any): any {
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.client.post('http://localhost:8087/Status_check/', studentDetails, options);

  }
  newApplication(details: any):any {
    const options = { headers: { 'Content-Type': 'application/json' } };
     this.client.post('http://localhost:8087/new_applicantion/', details, options).subscribe(
      (response: any) => {
        alert('done:' + response);
        this.router.navigateByUrl('application');
        return 'done';
      }
    );
  }

  getCollegeList(): any {
    return this.client.get('http://localhost:8087/getcollegelist/');
  }

  getDeparmenttList(): Observable<any> {
    return this.client.get('http://localhost:8087/departmentwise_request/' + this.collegeCode)
  }
  addCollege(details) {
    const options = { headers: { 'Content-Type': 'application/json' } };
    this.client.put('http://localhost:8087/adcollege/', details, options).subscribe(
      response => {

        alert("data noticed && status:" + response);
        this.router.navigate(['/', 'home']);
      }

    );
  }
  validate(details: Login):any {
    const options = { headers: { 'Content-Type': 'application/json' } };
    this.client.post<[]>('http://localhost:8087/login/', details, options).subscribe((data) => {
      console.log(data);
      
      if (data.length == 0) {
      //  return 'nouser';
      console.log('1');
      
      } else {

        for (let i of data) {
          if ('valid'.match(i)) {
            console.log('11');
            continue;
          }
          else if ('invalid'.match(i)) {
         //   return 'wrong';
         console.log('111');
          }
          else if ('admin'.match(i)) {
            this.router.navigate(['/', 'home']);
            console.log('1111');
          //  return 'null';
          }
          else {
            this.router.navigate(['/', 'collegehome']);
          //  return null;
          console.log('11111');
          }
        }
      }

    },(erro:HttpErrorResponse)=>{
      if(erro.status==0){
        alert('problem to connect to server : check the server availability');
      }
      
      if(erro.status==401){
        alert('unauthorised user,message from server');
      }
    });;
      

  }

}
