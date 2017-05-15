import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceErrorHandlingService {

    constructor() { }

    public handleError (error: any) {
        // log error
        let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`

        console.error(errorMsg);
        // throw an application level error
        return Observable.throw(errorMsg);

    }
}