import {  Http,  Response,  Headers,  URLSearchParams} from '@angular/http';
import { HttpService } from "../../common/services/http.service";
import {  Injectable} from '@angular/core';
import { ISearchService } from '../../core/components/ISearchService';
import {  Observable} from 'rxjs/Rx';
import {  SubAccountTransaction} from '../../models/records/sub-account-transaction';
import { ServiceErrorHandlingService } from '.././service-error-handling.service';
import { LegalEntityAccountPeriodLite } from "app/models/records/legal-entity-account-period-lite";

@Injectable()
export class LegalEntityAccountPeriodService {

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
    {

    }

    private apiUrl = '/records/LegalEntityAccoutPeriod/';

    public SearchByLoggedLegalEntityAndFilter(): Observable<Array<LegalEntityAccountPeriodLite>>
    {
        let leaps =  this.http.get(this.apiUrl+'SearchByLoggedLegalEntityAndFilter')
        .map((r:Response)=> r.json() as Array<LegalEntityAccountPeriodLite>)
        .catch(this.serviceErrorHandlingService.handleError);
        return leaps;
    }
}