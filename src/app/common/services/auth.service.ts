import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';

//import { AuthHttp } from './ng2-bearer';
import { UserManager, User, UserManagerSettings, WebStorageStateStore } from 'oidc-client';

import { API_SETTINGS } from '../../app.settings';

const POST_LOGIN_URL_KEY = 'post_login_redirect_url';

@Injectable()
export class AuthService {
    private _user: User;
    private mgr: UserManager = new UserManager(API_SETTINGS.getUserSettings());

    constructor(
        //private router: Router,
    ) {
        // this.mgr.getUser()
        //     .then(x => this.user = x)
        //     .catch(err => this.user = null);

        // this.mgr.events.addUserUnloaded(e => this.user = null);
    }

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
        if (user) {
            localStorage.setItem(API_SETTINGS.ACCESS_TOKEN_KEY, user.access_token);
            this._user = user;
            // this.userService.getMe().subscribe(
            //     result => {
            //         // Force the user to !SuperUser
            //         // let user: UserModel = new UserModel();
            //         // user.isSuperUser = false;
            //         // this.session.user = user;
            //         this.session.user = result;
            //     },
            //     error => {
            //         console.log(error);
            //     }
            // );
        }
        else
            localStorage.removeItem(API_SETTINGS.ACCESS_TOKEN_KEY);
    }

    isLoggedIn(): Promise<Boolean> {
        return new Promise((success, failure) => {
            this.mgr.getUser().then(user => {
                success(user != null && user.expires_in > 0);
            }).catch(err => failure(err));
        });
    }

    startSignIn() {
        return this.mgr.signinRedirect();
    }

    endSignIn() {
        return new Promise((success, failure) => {
            this.mgr.signinRedirectCallback().then(user => {
                this.user = user;
                success(user);
            }).catch(err => {
                this.user = null;
                failure(err);
            });
        });
    }

    // startSignOut() {
    //     this.user = null;
    //     return this.mgr.signoutRedirect();
    // }

    redirectToPreviousPage() {
        let url = localStorage.getItem(POST_LOGIN_URL_KEY) || '';
        localStorage.removeItem(POST_LOGIN_URL_KEY);
        // (<any>window).router = this.router;
        // this.router.navigateByUrl(url);
    }

    setPreviousPageUrl(url: string): void {
        localStorage.setItem(POST_LOGIN_URL_KEY, url);
    }
}