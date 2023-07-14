import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        console.log("RESONSE &&&&&&&&&&&&&&&&&&&&&&&&&"+ response.jwtToken + "&&&&&&&&&&&&&&&&&&&"+ response.user.userName)
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);


        this.router.navigate(['/patient'], {queryParams:{firstName:response.user.userFirstName , lastName: response.user.userLastName, userName: response.user.userName }});


      },
      (error) => {
        console.log(error);
      }
    );
  }
}
