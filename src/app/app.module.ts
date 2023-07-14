import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "../home/home.component";
import {AdminComponent} from "../admin/admin.component";
import {LoginComponent} from "../login/login.component";
import {HeaderComponent} from "../header/header.component";
import {NewUserComponent} from "../new-user/new-user.component";
import {NewUserOverviewComponent} from "../new-user-overview/new-user-overview.component";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../authentication/auth.guard";
import {AuthInterceptor} from "../authentication/auth.interceptor";
import {UserService} from "../services/user.service";
import {PatientComponent} from "../new-patient/patient.component";
import {PatientOverviewComponent} from "../patient-overview/patient-overview.component";
import {VitalSignComponent} from "../new-vital-sign/vital.component";
import {ReportingComponent} from "../Reporting/reporting.component";
import { HighchartsChartModule} from 'highcharts-angular';
import {VitalOverviewComponent} from "../vital-sign-overview/vital-overview.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    NewUserComponent,
    NewUserOverviewComponent,
    PatientComponent,
    PatientOverviewComponent,
    VitalSignComponent,
    ReportingComponent,
    VitalOverviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    HighchartsChartModule,
    CommonModule

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
