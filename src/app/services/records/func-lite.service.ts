import { Observable } from 'rxjs/Rx';
import { FuncLite } from '../../models/records/func-lite';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';

@Injectable()
export class FuncLiteService implements ISearchService<FuncLite, string> {

    private apiUrl = '/Records/FuncLite';

    constructor(
        public http: HttpService, 
        public ServiceErrorHandlingService: ServiceErrorHandlingService
    ) { }

    search(filter: string): Observable<Array<FuncLite>> {
        return this.GetByFilter(filter);
    }

    public GetByFilter(filter: string): Observable<Array<FuncLite>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set("filter", filter);

        let result = this.http.get(this.apiUrl, {search: params})
        .map((p: Response) => p.json() as Array<FuncLite>)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }

    public GetById(id: number): Observable<FuncLite> {
        let result = this.http.get(this.apiUrl + '/' + id)
        .map((p: Response) => p.json() as FuncLite)
        .catch(this.ServiceErrorHandlingService.handleError);

        return result;
    }
}