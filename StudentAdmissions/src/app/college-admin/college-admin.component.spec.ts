import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CollegeAdminComponent } from './college-admin.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('collegeamdincomponent', () => {
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers:[LoginService,CollegeAdminComponent],
      imports:[HttpClientModule,RouterTestingModule]
    })
  }));

  beforeEach(() => {
   
  });
  it('loging out  and redirect to login page',  async(inject([LoginService,Router],(injectService: LoginService,router:Router)=>{
    spyOn(router, 'navigate').and.stub();
    let compone:CollegeAdminComponent=TestBed.get(CollegeAdminComponent);
    compone.logout();
     expect(injectService.loginStatusCollegeAdmin).toBeFalsy();
     expect(router.navigate).toHaveBeenCalledWith(['/','login']);
  })));
  it('navigations works',  async(inject([Router],(router:Router)=>{
    spyOn(router, 'navigate').and.stub();
    let compone:CollegeAdminComponent=TestBed.get(CollegeAdminComponent);
    compone.navigate("navigate to some admin operations");
     expect(router.navigate).toHaveBeenCalledWith(['collegehome','navigate to some admin operations']);
  })));


  
});
