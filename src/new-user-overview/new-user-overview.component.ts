import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserModel} from "../models/userMOdel";

@Component({
  selector: 'app-new-user-overview',
  templateUrl: './new-user-overview.component.html',
  styleUrls: ['./new-user-overview.component.css']
})
export class NewUserOverviewComponent implements OnInit {

  constructor(
    private route : ActivatedRoute
  ) { }
  user : UserModel



  ngOnInit(): void {
    this.user = new UserModel()
    this.route.queryParams.subscribe((params : any)=>{

            this.user.userFirstName = params.firstName
            this.user.userLastName = params.lastName

    }
    )

  }

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }

}
