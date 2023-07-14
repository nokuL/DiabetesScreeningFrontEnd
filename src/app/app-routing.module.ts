import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {AdminComponent} from "../admin/admin.component";
import {AuthGuard} from "../authentication/auth.guard";
import {LoginComponent} from "../login/login.component";
import {NewUserComponent} from "../new-user/new-user.component";
import {NewUserOverviewComponent} from "../new-user-overview/new-user-overview.component";
import {PatientOverviewComponent} from "../patient-overview/patient-overview.component";
import {PatientComponent} from "../new-patient/patient.component";
import {VitalSignComponent} from "../new-vital-sign/vital.component";
import {ReportingComponent} from "../Reporting/reporting.component";
import {VitalOverviewComponent} from "../vital-sign-overview/vital-overview.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'login', component: LoginComponent },
  {path : 'newUser' , component: NewUserComponent},
  {path:  'newUserOverview', component: NewUserOverviewComponent},
  {path: 'patientOverview', component: PatientOverviewComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'vitals', component: VitalSignComponent},
  {path:  'reporting', component: ReportingComponent},
  {path: 'vitalsOverview', component: VitalOverviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
