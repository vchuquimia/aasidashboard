import { SessionService } from '../../services/session.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class CanActivateViaEntitySelectionGuard implements CanActivate {
    public lastRouteBeforeEntityGuard: BehaviorSubject<string>;

    constructor(public router: Router, public sessionService: SessionService) {
        this.lastRouteBeforeEntityGuard = new BehaviorSubject<string>(null);
    }
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.sessionService.currentLegalEntity.getValue() === null) {
            this.router.navigate(['entity']);
            console.log('calling router', state.url);
            this.lastRouteBeforeEntityGuard.next(state.url);
            return false;
        }

        return true;
    }

    public backToGuardedRoute() {
        let lastRoute = this.lastRouteBeforeEntityGuard.getValue();
        if (lastRoute !== null) {
            this.router.navigate([lastRoute]);
        }
    }
}
