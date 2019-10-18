import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('logincomponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers:[LoginService,LoginComponent],
      imports:[HttpClientModule,RouterTestingModule]
    })
    let compone:LoginComponent=TestBed.get(LoginComponent);
    compone.name='admin';
    compone.password='admin';
  });
it('values setted',()=>{
  let compone:LoginComponent=TestBed.get(LoginComponent);
  expect(compone.name&&compone.password).not.toBeNull();


});
it('Service called',
   async(inject([LoginService],(injectService: LoginService) => {
      let testBedService:LoginService = TestBed.get(LoginService);
      expect(injectService).toBe(testBedService);
    })
));
it('method validate in login service returns the values and navigation works',
 async(inject([LoginService,Router],(injectService: LoginService,router:Router)=>{
  spyOn(injectService,'validate').and.returnValue("resturns a string");
  spyOn(router, 'navigate').and.stub();
  let compone:LoginComponent=TestBed.get(LoginComponent);
  expect(compone.onSubmit()).toMatch(/[a-zA-Z]+/g);
  expect(router.navigate).toHaveBeenCalledWith(['/login']);
})));


afterAll(()=>{

//cleanup logic
})
});