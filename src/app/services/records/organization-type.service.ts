import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from "app/common/services/http.service";
import { ServiceErrorHandlingService } from "app/services/service-error-handling.service";
import { ISearchService } from "app/core/components/ISearchService";
import { OrganizationType } from "app/models/records/organization-type";



@Injectable()
export class OrganizationTypeService implements ISearchService<OrganizationType,string>   {

    private apiUrl = '/records/organizationtype/';

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService) {
    }

    public GetAll():Observable<Array<OrganizationType>>
    {
        let OrganizationType = this.http.get(this.apiUrl+'All')
        .map((r:Response)=>r.json() as Array<OrganizationType>)
        .catch(this.serviceErrorHandlingService.handleError);

        return OrganizationType;
    }

    public Delete(orgTypeId: number): Observable < Response > {
        let result = this.http.delete(this.apiUrl + orgTypeId)
        .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

    public search(): Observable<Array<OrganizationType>>{

        return  this.GetAll();
    }

    public Save(org: OrganizationType):Observable<OrganizationType>
    {
        let result: Observable < OrganizationType > ;
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        let objectToSend = JSON.stringify(org);
        if(org.Id>0){
            result = this.http.put(this.apiUrl,objectToSend,{
                headers:headers
            })
            .map((r:Response)=>{
                return r.json();
            });
        } else {
            result =  this.http.post(this.apiUrl,objectToSend, {
                headers:headers
            })
            .map((r:Response) => r.json());
        }
        return result;
    }

    public Get(orgId: number): Observable < OrganizationType > {
        let params: URLSearchParams = new URLSearchParams();
        params.set('orgTypeId', orgId.toString());

        let result = this.http.get(this.apiUrl + orgId,{
            search: params
        })
        .map((r: Response) => r.json() as OrganizationType)
        .catch(this.serviceErrorHandlingService.handleError);

        return result;
    }

}