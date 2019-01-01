import { Component, OnInit } from '@angular/core';
import {EMPLOYEES} from '../mock-employees';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  employees = EMPLOYEES;
  userName: string;
  pwd: string;
  isError = false;
  errorMessage = 'Invalid username or password';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  clearMessage() {
    this.isError = false;
  }

  checkAccount(): void {
    this.employees.forEach(item => {
      if (item.userName === this.userName && item.password === this.pwd) {
        this.isError = false;
        this.router.navigateByUrl('/home-page');
      } else {
        this.isError = true;
      }
    });
    if (this.isError) {
      setTimeout(() => {
        this.clearMessage();
      }, 1600);
    }
  }
}
