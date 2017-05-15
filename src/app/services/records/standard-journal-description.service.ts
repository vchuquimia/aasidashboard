import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServiceErrorHandlingService } from "../../services/service-error-handling.service";
import { HttpService } from "../../common/services/http.service";
import { ISearchService } from "../../core/components/ISearchService";
import { StandardDescription } from "../../models/records/standard-description";

@Injectable()
export class StandardJournalDescriptionService implements ISearchService<StandardDescription,string> {

    private apiUrl = '/records/standarddescription/';

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService) 
    {
    }

    public GetAll():Observable<Array<StandardDescription>>
    {
        let OrganizationType = this.http.get(this.apiUrl + 'All')
        .map((r:Response)=>r.json() as Array<StandardDescription>)
        .catch(this.serviceErrorHandlingService.handleError);

        return OrganizationType;
    }

    public search(): Observable<Array<StandardDescription>>{
         return  this.GetAll();
    }

    public Delete(staDescId: number): Observable < Response > {
        let result = this.http.delete(this.apiUrl + staDescId)
        .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

    public Save(staDesc: StandardDescription):Observable<StandardDescription>
    {
        let result: Observable < StandardDescription > ;
        let headers = new Headers();
        headers.append('Content-type','application/json');
        let objectToSend = JSON.stringify(staDesc);
        if(staDesc.Id>0){
            result = this.http.put(this.apiUrl,objectToSend,{
                headers:headers
            })
            .map((r:Response)=>{
                return r.json();
            });
        } else {
            result =  this.http.post(this.apiUrl ,objectToSend, {
                headers:headers
            })
            .map((r:Response) => r.json());
        }
        return result;
    }

    public Get(id: number): Observable < StandardDescription > {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id.toString());

        let result = this.http.get(this.apiUrl+ id,{
            search: params
        })
        .map((r: Response) => r.json() as StandardDescription)
        .catch(this.serviceErrorHandlingService.handleError);

        return result;
    }
}