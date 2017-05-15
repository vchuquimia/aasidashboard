import { BehaviorSubject } from 'rxjs/Rx';
import {LegalEntityLite} from '../models/legal-entity-lite';
export class SessionService
{
    /**
     *
     */
    constructor() {
        this.currentLegalEntity = new BehaviorSubject<LegalEntityLite>(null);
    }
    public currentLegalEntity: BehaviorSubject<LegalEntityLite>;
    

}