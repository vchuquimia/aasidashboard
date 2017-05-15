import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { ISearchService } from '../../core/components/ISearchService';
import { Observable } from 'rxjs/Rx';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { District } from '../../models/records/district';


@Injectable()
// implements ISearchService<District,string>
export class DistrictService implements ISearchService<District,string> {

  private apiUrl = '/Records/District';

  constructor(
    public http: HttpService, 
    public ServiceErrorHandlingService: ServiceErrorHandlingService
  ) { 

     }

  public search(filter: string): Observable<Array<District>>{

    return this.GetDistrict();
  }

  public GetDistrict(): Observable<Array<District>>
  {
    let District = this.http.get(this.apiUrl + '/GetAll')
      .map((r: Response) => r.json() as Array<District>)
      .catch(this.ServiceErrorHandlingService.handleError);

    return District;
  }

  public GetById(distId:number) : Observable<District> 
  {
    let District = this.http.get(this.apiUrl + '/' + distId)
      .map((r:Response) => r.json() as District)
      .catch(this.ServiceErrorHandlingService.handleError);

    return District;
  }

  public Set(district: District) : Observable<District>
  {
    let result : Observable<District>;
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let objectToSend = JSON.stringify(district);
    
    if(district.Id > 0)
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
  
  public DeleteDistrict(distId: number) : Observable<Response>
  {
    let result = this.http.delete(this.apiUrl + '/' + distId)
      .catch(this.ServiceErrorHandlingService.handleError);

    return result;    
  }  

}
