import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }
  phone = "12345";
  pwd = "abc";
  phoneO = "12345";
  pwdO = "aaa";
  login(phone: string, pwd: string){
    if(phone == this.phoneO && pwd == this.pwdO){
      console.log("Owner");
      this.router.navigate(['/owner']);
    }
    else if(phone == this.phone && pwd == this.pwd){
      console.log("Customer");
      this.router.navigate(['/foodhome']);
    }
    else{
      console.log("Not have");
    }
  }
}
