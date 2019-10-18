import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private service:LoginService,public router:Router) { }

  ngOnInit() {
  }
  confirm(){
    this.service.confirm().subscribe(s=>{
      alert("alotted seats: "+s);
      console.log(s);
      
    });

  }
  logout(){
    this.router.navigate(['/','login'])
  }

}
