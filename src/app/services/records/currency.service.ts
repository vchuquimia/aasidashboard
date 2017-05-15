import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { ISearchService } from '../../core/components/ISearchService';
import { Observable } from 'rxjs/Rx';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { Currency } from '../../models/records/currency';


@Injectable()
// implements ISearchService<District,string>
export class CurrencyService implements ISearchService<Currency,string> {

  private apiUrl = '/Records/Currency';

  constructor(
    public http: HttpService, 
    public ServiceErrorHandlingService: ServiceErrorHandlingService
  ) { 

     }

  public search(filter: string): Observable<Array<Currency>>{

    return this.GetCurrency();
  }

  public GetCurrency(): Observable<Array<Currency>>
  {
    let currency = this.http.get(this.apiUrl + '/GetAll')
      .map((r: Response) => r.json() as Array<Currency>)
      .catch(this.ServiceErrorHandlingService.handleError);

    return currency;
  }

  public GetById(curId:number) : Observable<Currency> 
  {
    let currency = this.http.get(this.apiUrl + '/' + curId)
      .map((r:Response) => r.json() as Currency)
      .catch(this.ServiceErrorHandlingService.handleError);

    return currency;
  }

  public Set(currency: Currency) : Observable<Currency>
  {
    let result : Observable<Currency>;
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let objectToSend = JSON.stringify(currency);
    
    if(currency.Id > 0)
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
  
  public DeleteCurrency(curId: number) : Observable<Response>
  {
    let result = this.http.delete(this.apiUrl + '/' + curId)
      .catch(this.ServiceErrorHandlingService.handleError);

    return result;    
  }  

}
