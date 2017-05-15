import { Observable } from 'rxjs/Rx';
import { FundLite } from '../../models/records/fund-lite';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';

@Injectable()
export class FundLiteService implements ISearchService<FundLite, string> {

    private apiUrl = '/Records/FundLite';

    constructor(
        public http: HttpService, 
        public ServiceErrorHandlingService: ServiceErrorHandlingService
    ) { }

    search(filter: string): Observable<Array<FundLite>> {
        return this.GetByFilter(filter);
    }

    public GetByFilter(filter: string): Observable<Array<FundLite>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set("filter", filter);

        let result = this.http.get(this.apiUrl, {search: params})
        .map((p: Response) => p.json() as Array<FundLite>)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }

    public GetById(id: number): Observable<FundLite> {
        let result = this.http.get(this.apiUrl + '/' + id)
        .map((p: Response) => p.json() as FundLite)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }

}