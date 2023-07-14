import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Patient} from "../models/patient";
import {VitalsService} from "../services/vitals.service";

@Component({
  selector: 'app-user',
  templateUrl: './vital.component.html',
  styleUrls: ['./vital.component.css']
})
export class VitalSignComponent implements OnInit {
  constructor(private vitalsService: VitalsService,
      private route : ActivatedRoute,
      private router: Router

    ) { }

    userName : string
    firstName : string
    patientFirstName : string
  patientId : string

  ngOnInit(): void {
    this.route.queryParams.subscribe((params : any)=>{
      this.userName = params.firstName
      this.firstName = params.lastName
      this.patientFirstName = params.patientName
      this.patientId = params.patientId
}
)
  }

  recordVitals(vitalsForm : NgForm) {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"+ vitalsForm.value)
    vitalsForm.controls['patientId'].setValue(this.patientId)
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+ vitalsForm.controls['patientId'].value)
    this.vitalsService.recordVitals(vitalsForm.value).subscribe(
      (response: any) => {

        this.router.navigate(['/vitalsOverview'], {queryParams:{id:response.id , firstName: response.firstName,
            patientId: this.patientId , vitalsList: response , address : response.address
           }});


      },
      (error) => {
        console.log(error);
      }
    );
  }
}
