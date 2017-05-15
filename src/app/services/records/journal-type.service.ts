import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { ISearchService } from '../../core/components/ISearchService';
import { Observable } from 'rxjs/Rx';
import { HttpService} from '../../common/services/http.service';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { JournalType } from '../../models/records/journal-type';


@Injectable()
export class JournalTypeService implements ISearchService<JournalType, string> {

  private apiUrl = '/Records/JournalType';

  constructor(
    public http: HttpService,
    public ServiceErrorHandlingService: ServiceErrorHandlingService
    ) {

      }

  public GetJournalType(): Observable<Array<JournalType>>
  {
    let JournalType = this.http.get(this.apiUrl + '/GetAll')
      .map((r: Response) => r.json() as Array<JournalType>)
      .catch(this.ServiceErrorHandlingService.handleError);

    return JournalType;
  }
    

  public GetById(jtId:number) : Observable<JournalType> 
  {
    let JournalType = this.http.get(this.apiUrl + '/' + jtId)
      .map((r:Response) => r.json() as JournalType)
      .catch(this.ServiceErrorHandlingService.handleError);

    return JournalType;
  }

  public Set(journalType: JournalType) : Observable<JournalType>
  {
    let result : Observable<JournalType>;
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let objectToSend = JSON.stringify(journalType);
    
    if(journalType.Id > 0)
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
  
  public DeleteJournalType(jtId: number) : Observable<Response>{
    let result = this.http.delete(this.apiUrl + '/' + jtId)
      .catch(this.ServiceErrorHandlingService.handleError);

    return result;    
  }

  public search(filter: string): Observable<Array<JournalType>>{
    return this.GetJournalType();
  }

}
