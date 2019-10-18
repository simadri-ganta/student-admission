import { Component, OnInit } from '@angular/core';
import { ApplicantComponent } from '../applicant/applicant.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-statu',
  templateUrl: './statu.component.html',
  styleUrls: ['./statu.component.css']
})
export class StatuComponent implements OnInit {

  constructor(public service: LoginService, public router: Router) { }
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

  ngOnInit() {
  }
  public state:boolean=false;
  refresh(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/', 'statu'])
  }
  onclick() {
    console.log(this.deatils)
    this.service.statusCheck(this.deatils).subscribe(
      (data: any) => {
        this.state=true;
        let updateMsg = document.getElementById('response');
        updateMsg.innerHTML = "application status : " + data[0];
        updateMsg.style.padding = '30px';
        updateMsg.style.color = 'black';
        if ('pending'.match(data[0])) {
          updateMsg.style.backgroundColor = "yellow";
        }
        else if ('accepted'.match(data[0])) {
          updateMsg.style.backgroundColor = "green";
        }
        else if ('rejected'.match(data[0])) {
          updateMsg.style.backgroundColor = "red";
        }

      },(response) => 
      { 
        if(response.status==500){
            alert('server srror at backend');
        }
      }
    )






  }


}
