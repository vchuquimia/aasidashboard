import { SessionService } from '../../services/session.service';
import { AuthService } from '../../common/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthService } from '../core/services/auth.service';
// import { BusyIndicatorComponent } from '../core/components';
import { User } from 'oidc-client';
// import { SessionService } from '../core/services/session.service';

// import { TranslateService } from 'ng2-translate';

@Component({
    moduleId: module.id,
    template: './callback.component.html',
})

export class CallbackComponent implements OnInit {
    constructor(
        private router: Router,
        private authService: AuthService,
        // private translate: TranslateService, 
        private session: SessionService
    ) {}

    ngOnInit(): void {
        this.authService.endSignIn()
            .then(user => {
                this.authService.user = <User> user;
                this.authService.redirectToPreviousPage();
                if(!this.session.currentLegalEntity){
                    this.router.navigate(['entity-selection']);
                }
            })
            .catch(err => {
                //console.log(this.translate.instant('errorLoginFinish'), err);
            });
    }
}