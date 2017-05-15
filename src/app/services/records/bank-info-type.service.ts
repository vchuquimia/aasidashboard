import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { ISearchService } from '../../core/components/ISearchService';
import { Observable } from 'rxjs/Rx';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { BankInfoType } from '../../models/records/bank-info-type';


@Injectable()
export class BankInfoTypeService implements ISearchService<BankInfoType, string> {

  private apiUrl = '/Records/BankInfoType';

  constructor(
    public http: HttpService,
    public ServiceErrorHandlingService: ServiceErrorHandlingService
    ) {

      }

  public GetBankInfoType(): Observable<Array<BankInfoType>>
  {
    let BankInfoType = this.http.get(this.apiUrl + '/GetAll')
      .map((r: Response) => r.json() as Array<BankInfoType>)
      .catch(this.ServiceErrorHandlingService.handleError);

    return BankInfoType;
  }

  public GetById(bankInfTypeId:number) : Observable<BankInfoType> 
  {
    let BankInfoType = this.http.get(this.apiUrl + '/' + bankInfTypeId)
      .map((r:Response) => r.json() as BankInfoType)
      .catch(this.ServiceErrorHandlingService.handleError);

    return BankInfoType;
  }

  public Set(bankInfoType: BankInfoType) : Observable<BankInfoType>
  {
    let result : Observable<BankInfoType>;
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let objectToSend = JSON.stringify(bankInfoType);
    
    if(bankInfoType.Id > 0)
    {
      //UPDATE
      result = this.http.put(this.apiUrl, objectToSend, { headers : headers})
        .map((r:Response) => {return r.json();});
    }
    else{
      //CREATE
      result = this.http.post(this.apiUrl, objectToSend, {headers : headers})
        .map((r:Response) => r.json());
    }
    return result;
  }
  
  public DeleteBankInfoType(bankInfTypeId: number) : Observable<Response>{
    let result = this.http.delete(this.apiUrl + '/' + bankInfTypeId)
      .catch(this.ServiceErrorHandlingService.handleError);

    return result;    
  }

  public search(filter: string): Observable<Array<BankInfoType>>{
    return this.GetBankInfoType();
  }

}
