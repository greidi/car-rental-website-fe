import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class CustomHttpInterceptorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let auth;
    try {
      auth = sessionStorage.getItem('auth');
      console.log(auth);
    } catch (error) {
      console.log(error);
    }
    if (auth) {
      const req = request.clone({
        headers: new HttpHeaders().set('Authorization', auth)
      });
      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }
}
