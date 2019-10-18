import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstudentComponent } from './topstudent.component';

describe('', () => {
  let component: TopstudentComponent;
  let fixture: ComponentFixture<TopstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
