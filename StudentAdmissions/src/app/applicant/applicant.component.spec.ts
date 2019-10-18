import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ApplicantComponent } from './applicant.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, observable } from 'rxjs';
import { of } from 'rxjs';
describe('application component', () => {

 
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers:[LoginService,ApplicantComponent],
      imports:[HttpClientModule,RouterTestingModule]
    }) 
    
  });
  it('method  newapplicant in the service returns the values and navigation (reload page works)',  async(inject([LoginService,Router],(injectService: LoginService,router:Router)=>{
    spyOn(injectService,'newApplication').and.returnValue("done");
    spyOn(router, 'navigate').and.stub();
    let compone:ApplicantComponent=TestBed.get(ApplicantComponent);
    compone.newapplicant()
    expect(router.navigate).toHaveBeenCalledWith(['/', 'application']);
  })));
  it('getting college list and storing in the local variables',async(inject([LoginService,ApplicantComponent],(injectService: LoginService)=>{
    // spyOn(injectService,'getCollegeList').and.returnValue(({subscribe: () => {  } }));
    spyOn(injectService,'getCollegeList').and.returnValue(of(["r02","cmrit","r34","dfds",'ssdfdf','dfdsfg']));
    let compone:ApplicantComponent=TestBed.get(ApplicantComponent);
      compone.changed();
      expect(compone.collegecode&&compone.collegename).not.toBeNull();
  
  })))    
  
});
