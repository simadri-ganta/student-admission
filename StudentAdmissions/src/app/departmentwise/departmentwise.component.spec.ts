import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DepartmentwiseComponent } from './departmentwise.component';
import { LoginService } from '../login.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('department comonet', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers:[LoginService,DepartmentwiseComponent],
      imports:[HttpClientModule,RouterTestingModule]
   
  });
});
  
  it('department wise list works',  async(inject([LoginService],(injectService: LoginService)=>{
    // spyOn(service, 'confirm').and.returnValue({subscribe: () => {  } });
    spyOn(injectService,'getDeparmenttList').and.returnValue(of());
      let compone:DepartmentwiseComponent=TestBed.get(DepartmentwiseComponent);
      compone.ngOnInit();
      expect(injectService.getDeparmenttList).toHaveBeenCalled();
    })));
  
});
