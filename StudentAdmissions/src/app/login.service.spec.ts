import { TestBed, fakeAsync } from '@angular/core/testing';

import { LoginService } from './login.service';
import { Login } from './login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

xdescribe('', () => {
  beforeEach(() => TestBed.configureTestingModule({

    declarations: [],
    imports: [HttpClientModule,RouterTestingModule],
    providers: [LoginService]
    
    

  })); 
  // it('should be created', () => {
  //   let login=new Login();
  //   login.password='admin';
  //   login.userId='admin';
  //   const service: LoginService = TestBed.get(LoginService);
  //   expect(service.validate(login)).toBeTruthy();
  //   TestBed.get(location);
   
    
  // });
});
