import { Observable } from 'rxjs/Rx';
import { AccountLite } from '../../models/records/account-lite';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';

@Injectable()
export class AccountLiteService implements ISearchService<AccountLite, string>{

    private apiUrl = '/Records/AccountLite';

    constructor(
        public http: HttpService, 
        public ServiceErrorHandlingService: ServiceErrorHandlingService
    ) { }

    search(filter: string): Observable<Array<AccountLite>> {
        return this.GetByFilter(filter);
    }

    public GetByFilter(filter: string): Observable<Array<AccountLite>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set("filter", filter);

        let result = this.http.get(this.apiUrl, {search: params})
        .map((p: Response) => p.json() as Array<AccountLite>)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }

    public GetById(id: number): Observable<AccountLite> {
        let result = this.http.get(this.apiUrl + '/' + id)
        .map((p: Response) => p.json() as AccountLite)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }
}