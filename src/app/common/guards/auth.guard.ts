import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private router: Router, 
        private authService: AuthService
        ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return new Promise((success, failure) => {
            this.authService.isLoggedIn().then(logged => {
                if (logged) {
                    success(true);
                } else {
                    this.authService.setPreviousPageUrl(state.url);
                     this.authService.startSignIn();
                    //this.router.navigate(['/login']);
                    success(false);
                }
            }).catch(err => failure(err));
        });
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise((success, failure) => {
            this.authService.isLoggedIn().then(logged => {
                if (logged) {
                    success(true);
                } else {
                    success(false);
                }
            }).catch(err => failure(err));
        });
    }

}