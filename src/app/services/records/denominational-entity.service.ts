import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { ISearchService } from '../../core/components/ISearchService';
import { Observable } from 'rxjs/Rx';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { DenominationalEntity } from '../../models/records/denominational-entity';


@Injectable()
// implements ISearchService<District,string>
export class DenominationalEntityService implements ISearchService<DenominationalEntity,string> {

  private apiUrl = '/Records/DenominationalEntity';

  constructor(
    public http: HttpService, 
    public ServiceErrorHandlingService: ServiceErrorHandlingService
  ) { 

     }

  public search(filter: string): Observable<Array<DenominationalEntity>>{

    return this.GetDenominational();
  }

  public GetDenominational(): Observable<Array<DenominationalEntity>>
  {
    let denominational = this.http.get(this.apiUrl + '/GetAll')
      .map((r: Response) => r.json() as Array<DenominationalEntity>)
      .catch(this.ServiceErrorHandlingService.handleError);

    return denominational;
  }

  public GetById(denId:number) : Observable<DenominationalEntity> 
  {
    let denominational = this.http.get(this.apiUrl + '/' + denId)
      .map((r:Response) => r.json() as DenominationalEntity)
      .catch(this.ServiceErrorHandlingService.handleError);

    return denominational;
  }

  public Set(denominational: DenominationalEntity) : Observable<DenominationalEntity>
  {
    let result : Observable<DenominationalEntity>;
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let objectToSend = JSON.stringify(denominational);
    
    if(denominational.Id > 0)
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
  
  public Delete(denId: number) : Observable<Response>
  {
    let result = this.http.delete(this.apiUrl + '/' + denId)
      .catch(this.ServiceErrorHandlingService.handleError);

    return result;    
  }  

}
