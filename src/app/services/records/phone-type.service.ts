import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { ServiceErrorHandlingService } from "app/services/service-error-handling.service";
import { HttpService } from "app/common/services/http.service";
import { ISearchService } from "app/core/components/ISearchService";
import { PhoneType } from "app/models/records/phone-type";


@Injectable()
export class PhoneTypeService implements ISearchService<PhoneType,string> {

    private apiUrl = '/records/phonetype/';

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService) {

    }

    public GetAll():Observable<Array<PhoneType>>
    {
        let PhoneTypes =  this.http.get(this.apiUrl+'All')
        .map((r:Response)=> r.json() as Array<PhoneType>)
        .catch(this.serviceErrorHandlingService.handleError);
        return PhoneTypes;
    }

    public Delete(phoneTypeId:number):Observable<Response>{
        let result = this.http.delete(this.apiUrl+ phoneTypeId )
        .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }
    
    public search(): Observable<Array<PhoneType>>{
        return this.GetAll();
    }

    public Save(phoneType: PhoneType):Observable<PhoneType>
    {
        let result:Observable<PhoneType>;
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        let objectToSend =  JSON.stringify(phoneType);
        if(phoneType.Id>0)
        {   
            result = this.http.put(this.apiUrl,objectToSend,{ headers:headers})
            .map((r:Response)=>{
                return r.json();
            });
        } else {
            result =  this.http.post(this.apiUrl,objectToSend, {headers:headers})
            .map((r:Response) => r.json());
        }
        return result;
    }

    public Get(phoneTypeId: number): Observable < PhoneType > {
        let params: URLSearchParams = new URLSearchParams();
        params.set('phoneTypeId', phoneTypeId.toString());

        let result = this.http.get(this.apiUrl + phoneTypeId,{
            search: params
        })
        .map((r: Response) => r.json() as PhoneType)
        .catch(this.serviceErrorHandlingService.handleError);

        return result;
    }
}