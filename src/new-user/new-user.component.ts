import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserServiceService } from '../services/new-user-service.service';
import { UserAuthService } from '../services/user-auth.service';
import {UserModel} from "../models/userMOdel";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']

})
export class NewUserComponent implements OnInit {

  constructor(
    private userService: NewUserServiceService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  DateSelected : any
  user : UserModel

  fetchDateSelected(){
    console.log("Date selected by user is "+ this.DateSelected)

  }



  ngOnInit(): void {


  }


  async registerUser(newUserForm: NgForm) {
    try {
      const response: any = await this.userService.registerNewUser(newUserForm.value).toPromise();
      const userModel: UserModel = response;
      userModel.userFirstName = response.userFirstName;
      console.log("Response LAST NAME >>>>>>>>>> " +response.userLastName);

      this.userAuthService.setRoles(response.role);
      this.userAuthService.setToken(response.jwtToken);
      console.log("USER MODEL BEFORE PARSING   "+userModel.userFirstName );
      console.log("USER MODEL BEFORE PARSING   "+userModel.userLastName );

      this.router.navigate(['/newUserOverview'], {queryParams:{firstName:response.userFirstName , lastName: response.userLastName, userName: response.userName }});

      /*
      const role = response.role[0].roleName;
      if (role === 'Admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
      */
    } catch (error) {
      console.log(error);
    }
  }
}

