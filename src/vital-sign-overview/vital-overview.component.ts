import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from "../models/patient";
import {VitalSign} from "../models/vitalSign";


@Component({
  selector: 'vitals-overview',
  templateUrl: './vital-overview.component.html',
  styleUrls: ['./vital-overview.component.css']
})
export class VitalOverviewComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
  private router: Router

) { }

  patient : Patient
  vitalsList : any []


  ngOnInit(): void {
    this.patient = new Patient()
    this.route.queryParams.subscribe((params : any)=>{

            this.patient.firstName = params.firstName
            this.patient.lastName = params.lastName
            this.patient.birthDate = params.birthDate
            this.patient.gender = params.gender
            this.patient.address = params.address
            this.patient.id = params.id
            this.vitalsList = params.vitalsList
      console.log("KKKKKKKKKKKKKKKKKKKKKKK "+ this.vitalsList)

      this.vitalsList.forEach(item=>console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  rrrrrrrrrrrrrrrrrr" + item.dateRecorded))
    }
    )

  }

  recordPatientVitals() {

        this.router.navigate(['/vitals'], {queryParams:{patientName:this.patient.firstName ,
            patientId: this.patient.id }});

  }
}
