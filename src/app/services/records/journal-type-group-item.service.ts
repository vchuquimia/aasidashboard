import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { HttpService } from "../../common/services/http.service";
import { httpFactory } from '@angular/http/src/http_module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ServiceErrorHandlingService } from '.././service-error-handling.service';
import { ISearchService } from '../../core/components/ISearchService';
import { JournalType } from '../../models/records/journal-type';


@Injectable()
export class JournalTypeGroupItemService {

  private apiUrl = '/records/JournalTypeGroupItem';

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
    {
    }

    public GetAvailableJournalType(IdJTG:number): Observable<Array<JournalType>>
  {
    let JournalType = this.http.get(this.apiUrl+'/'+IdJTG+ '/GetAvailable')
      .map((r: Response) => r.json() as Array<JournalType>)
      .catch(this.serviceErrorHandlingService.handleError);

    return JournalType;
  }
public GetUsedJournalType(IdJTG:number): Observable<Array<JournalType>>
  {
    let JournalType = this.http.get(this.apiUrl+'/'+IdJTG+ '/GetUsed')
      .map((r: Response) => r.json() as Array<JournalType>)
      .catch(this.serviceErrorHandlingService.handleError);

    return JournalType;
  }


  public save( journalTypeIdsSave: string,journalTypeIdsDelete: string , journalTypeGroupId: number) : Observable<string>
  {
  let params: URLSearchParams = new URLSearchParams();
    params.set('journalTypeGroupId', journalTypeGroupId.toString());
    params.set('journalTypeIdsSave', journalTypeIdsSave);
    params.set('journalTypeIdsDelete', journalTypeIdsDelete);

     let result = this.http.get(this.apiUrl+'/Save', {search: params})
        .map((r:Response) => r.json() as string)
        .catch(this.serviceErrorHandlingService.handleError);
  
    return result;
  }



}
