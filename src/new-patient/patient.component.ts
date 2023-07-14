import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Patient} from "../models/patient";

@Component({
  selector: 'app-user',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private itemsService: PatientService,
      private route : ActivatedRoute,
      private router: Router

    ) { }

    userName : string
    firstName : string

  ngOnInit(): void {
    this.route.queryParams.subscribe((params : any)=>{
      console.log("............ USER FIRST NAME IN NET PAGE" + params.firstName)

      this.userName = params.firstName
      this.firstName = params.lastName

}
)
  }
  recordPatients(patientForm: NgForm) {
    patientForm.value.userName = this.userName;
    console.log("GENDER >>>>>>>>>>>>>>>>>>>>> HERE HERE" + patientForm.value.gender + patientForm.value.firstName)
    this.itemsService.recordPatient(patientForm.value).subscribe(
      (response: any) => {
        const patient: Patient = response
        patient.firstName = response.firstName


        this.router.navigate(['/patientOverview'], {queryParams:{id:response.id , firstName: response.firstName,
            lastName: response.lastName , gender : response.gender , birthDate: response.birthDate , address : response.address
           }});


      },
      (error) => {
        console.log(error);
      }
    );
  }
}
