import { Observable } from 'rxjs/Rx';
import { RestrictionLite } from '../../models/records/restriction-lite';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';

@Injectable()
export class RestrictionLiteService implements ISearchService<RestrictionLite, string> {
    
    private apiUrl = '/Records/RestrictionLite';

    constructor(
        public http: HttpService, 
        public ServiceErrorHandlingService: ServiceErrorHandlingService
    ) { }

    search(filter: string): Observable<Array<RestrictionLite>> {
        return this.GetByFilter(filter);
    }

    public GetByFilter(filter: string): Observable<Array<RestrictionLite>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set("filter", filter);

        let result = this.http.get(this.apiUrl, {search: params})
        .map((p: Response) => p.json() as Array<RestrictionLite>)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }

    public GetById(id: number): Observable<RestrictionLite> {
        let result = this.http.get(this.apiUrl + '/' + id)
        .map((p: Response) => p.json() as RestrictionLite)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }

}