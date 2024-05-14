import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import user from '../user.model';
import UserService from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }
  user: user | undefined;
  isNotExists: boolean = false;
  
  hide = true;
  
  loginForm: FormGroup = new FormGroup({
    "nameControl": new FormControl("", [Validators.minLength(4), Validators.required]),
    "passwordControl": new FormControl("", [Validators.minLength(4), Validators.required]),
  })

  sendForm() {
    this.userService.setUser(this.loginForm.value.nameControl, this.loginForm.value.passwordControl)
    if (this.userService.user?.permission === 1)
      this.router.navigate([`/admin/${this.userService.user.id}`]);
    else if (this.userService.user?.permission === 2)
      this.router.navigate([`/doctor/${this.userService.user.id}`]);
    else if (this.userService.user?.permission === 3)
      this.router.navigate([`/secretary/${this.userService.user.id}`]);
    else
      this.isNotExists = true;
  }
}
