import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,public service:LoginService) { }

  ngOnInit() {
    console.log('coming home');
  
  }
  openCity(evt, cityName,link) {
    var i, tabcontent, tablinks;
    this.router.navigate(['home/'+link]);
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).style.backgroundColor="#ccc"; 
   // evt.currentTarget.className += " active";
  }
  logout(){
   this.service.loginStatusAdmin=false;
    this.router.navigate(['/','login'])
  }

}
