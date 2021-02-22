import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        
        if (localStorage.getItem('user') !== null) {
            let usr:User = JSON.parse(localStorage.getItem('user')||'');
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer '+usr.token
                }
            });
        }

        return next.handle(request);
    }
}