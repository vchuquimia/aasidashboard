import {  SubAccountType} from '../../models/records/sub-account-type';
import {  Http,  Response,  Headers,  URLSearchParams} from '@angular/http';
import { HttpService } from "../../common/services/http.service";
import {  Injectable} from '@angular/core';
import { ISearchService } from '../../core/components/ISearchService';
import {  Observable} from 'rxjs/Rx';
import {  SubAccountTransaction} from '../../models/records/sub-account-transaction';
import {  ServiceErrorHandlingService} from '.././service-error-handling.service';

@Injectable()
export class SubAccountTypeService implements ISearchService < SubAccountType, number > {

  private apiUrl = '/records/subaccounttype/';

  constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService) {

  }
  public GetByFilter(filter: string, subAccountTypeId: number): Observable < Array < SubAccountType >> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('filter', filter);
    let subAccount = this.http.get(this.apiUrl , {
        search: params
      })
      .map((r: Response) => r.json() as Array < SubAccountType > )
      .catch(this.serviceErrorHandlingService.handleError);
    return subAccount;
  }
  public search(filter: string, subAccountTypeId: number): Observable < Array < SubAccountType >> {

    return this.GetByFilter(filter, subAccountTypeId);
  }
  public Get(id: number): Observable<SubAccountType>{
      let params: URLSearchParams = new URLSearchParams();
    params.set('id', id.toString());
    let subAccountType = this.http.get(this.apiUrl + id , {
        search: params
      })
      .map((r: Response) => r.json() as SubAccountType)
      .catch(this.serviceErrorHandlingService.handleError);
    return subAccountType;
  }
  public GetAll(): Observable<Array<SubAccountType>>
  {
    let sat = this.http.get(this.apiUrl + 'All')
    .map((r: Response ) =>  r.json() as SubAccountType)
    .catch(this.serviceErrorHandlingService.handleError);
    return sat; 
  }

  public Delete(satId:number):Observable<Response>
  {
    let result = this.http.delete(this.apiUrl + satId )
    .catch(this.serviceErrorHandlingService.handleError);
    return result

  }

  public Save(sat:SubAccountType): Observable<SubAccountType>
  {
    let result : Observable<SubAccountType>
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let objectToSend = JSON.stringify(sat);

    if(sat.Id>0)
    {
      result = this.http.put(this.apiUrl,objectToSend, {headers:headers})
      .map((r:Response) =>
      {
        return r.json();
      });
    }
    else
    {
      result = this.http.post(this.apiUrl, objectToSend, {headers:headers})
      .map((r:Response) => r.json());
    }

    return result;


  }



}
