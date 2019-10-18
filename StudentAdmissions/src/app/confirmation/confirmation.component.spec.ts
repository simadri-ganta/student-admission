import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ConfirmationComponent } from './confirmation.component';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('', () => {
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers:[LoginService,ConfirmationComponent],
      imports:[HttpClientModule,RouterTestingModule]
    })
   
  }));

  it('navigations works',  async(inject([LoginService],(injectService: LoginService)=>{
  // spyOn(service, 'confirm').and.returnValue({subscribe: () => {  } });
  spyOn(injectService,'confirm').and.returnValue({subscribe: () => {  } });
    let compone:ConfirmationComponent=TestBed.get(ConfirmationComponent);
    compone.confirm();
    expect(injectService.confirm).toHaveBeenCalled();
  })));

 
});
