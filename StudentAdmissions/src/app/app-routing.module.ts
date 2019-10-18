import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StatuComponent } from './statu/statu.component';
import { CollegeAdminComponent } from './college-admin/college-admin.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { CollegeComponent } from './college/college.component';
import { LoginService } from './login.service';
import { CollegeAdminGuardService } from './college-admin-guard.service';
import { HomeAdminGuardService } from './home-admin-guard.service';
import { ExampleComponent } from './example/example.component';
import { ReviewComponent } from './review/review.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DepartmentwiseComponent } from './departmentwise/departmentwise.component';
import { TopstudentComponent } from './topstudent/topstudent.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    canActivate: [HomeAdminGuardService],
    children: [{ path: 'newcollege', component: CollegeComponent }]
  },

  { path: 'statu', component: StatuComponent },
  {
    path: 'collegehome', component: CollegeAdminComponent,
    canActivate: [CollegeAdminGuardService],
    children: [
      { path: 'review', component: ReviewComponent },
      { path: 'confirm', component: ConfirmationComponent },
      { path: 'departwise', component: DepartmentwiseComponent },
      { path: 'topstudents', component: TopstudentComponent }
    ]

  },
  { path: 'application', component: ApplicantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
