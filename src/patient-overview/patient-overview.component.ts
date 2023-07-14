import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from "../models/patient";


@Component({
  selector: 'patient-overview',
  templateUrl: './patient-overview.component.html',
  styleUrls: ['./patient-overview.component.css']
})
export class PatientOverviewComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
  private router: Router

) { }

  patient : Patient

  ngOnInit(): void {
    this.patient = new Patient()
    this.route.queryParams.subscribe((params : any)=>{

            this.patient.firstName = params.firstName
            this.patient.lastName = params.lastName
            this.patient.birthDate = params.birthDate
            this.patient.gender = params.gender
            this.patient.address = params.address
            this.patient.id = params.id
    }
    )

  }

  recordPatientVitals() {

        this.router.navigate(['/vitals'], {queryParams:{patientName:this.patient.firstName ,
            patientId: this.patient.id }});

  }
}
