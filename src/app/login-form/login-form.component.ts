import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private loginService:LoginService) {
}

username:string = '';
password:string = '';

onLogin(){
this.loginService.doLogin(this.username, this.password).subscribe({
next: ()=> {
// console.log(res);
this.createSession();
this.router.navigate(['books']);
},
error: (error)=> {
  console.log(error);
  alert("Invalid username or password")}
})
}

createSession(){
sessionStorage.setItem('auth', 'Basic ' + window.btoa(this.username + ':' + this.password))
}
}
