import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OperationsComponent } from './operations/operations.component';
import { HomeComponent } from './home/home.component';
import { StatuComponent } from './statu/statu.component';
import { CollegeComponent } from './college/college.component';
import { CollegeAdminComponent } from './college-admin/college-admin.component';
import { ReviewComponent } from './review/review.component';
import { TopstudentComponent } from './topstudent/topstudent.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DepartmentwiseComponent } from './departmentwise/departmentwise.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ExampleComponent } from './example/example.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OperationsComponent,
    HomeComponent,
    StatuComponent,
    CollegeComponent,
    CollegeAdminComponent,
    ReviewComponent,
    TopstudentComponent,
    ConfirmationComponent,
    DepartmentwiseComponent,
    ApplicantComponent,
    ExampleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
