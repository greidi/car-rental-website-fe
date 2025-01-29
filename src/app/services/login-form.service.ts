import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private BASEURL = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  doLogin(username:string, password:string) {
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post(this.BASEURL + '/user/login', {}, {params:params});
  }

  isLoggedIn(){
    return sessionStorage.getItem("auth") != null;
  }
}
