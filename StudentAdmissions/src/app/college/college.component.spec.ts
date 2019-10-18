import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CollegeComponent } from './college.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('CollegeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers:[LoginService,CollegeComponent],
      imports:[RouterTestingModule,HttpClientModule]
    })
    let compone:CollegeComponent=TestBed.get(CollegeComponent);
    compone.collegeDetails.college_code='r02';
    compone.collegeDetails.college_name='cmr';
    compone.collegeDetails.college_rank="09";
 
  }));


  it('method  addcollege in the service called and navigation (reload page works)',  async(inject([LoginService,Router],(injectService: LoginService,router:Router)=>{
    spyOn(injectService,'addCollege').and.returnValue();
    spyOn(router, 'navigate').and.stub();
    let compone:CollegeComponent=TestBed.get(CollegeComponent);
    compone.addCollege();
    expect(router.navigate).toHaveBeenCalledWith(['/','home', 'newcollege']);
  })));
  it('storing college details',()=>{
    let compone:CollegeComponent=TestBed.get(CollegeComponent);
    expect(compone.collegeDetails.college_name&&compone.collegeDetails.college_code&& compone.collegeDetails.college_rank).not.toBeNull();
  });  
});
