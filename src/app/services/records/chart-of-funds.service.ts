import { Injectable } from '@angular/core';
import { Http, Response,Headers, URLSearchParams } from '@angular/http';
import { LegalEntityLite} from '../../models/legal-entity-lite';
import { AgregateLegalEntity} from '../../models/agregate-legal-entity';
import { Observable,Subject, BehaviorSubject } from 'rxjs/Rx';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { HttpService } from '../../common/services/http.service';
import {ISearchService} from '../../core/components/ISearchService';
import {ChartOfFunds} from '../../models/records/chart-of-funds';

@Injectable()
export class ChartOfFundsService implements ISearchService<ChartOfFunds, string>{

  constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
   {}
   private apiUrl = '/records/ChartOfFunds'; 

   public GetByFilter(filter: string): Observable<Array<ChartOfFunds>>{
         let params: URLSearchParams = new URLSearchParams();
         params.set('filter', filter);
       let sd = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<ChartOfFunds>)
        .catch(this.serviceErrorHandlingService.handleError) ;
         return sd;
    }

    public search(filter: string): Observable<Array<ChartOfFunds>>{

        return  this.GetByFilter(filter);
       } 

    public GetById(fstId: number): Observable<ChartOfFunds>
    {
        let entity = this.http.get(this.apiUrl+'/'+fstId)
            .map((r: Response) => r.json()as ChartOfFunds)
            .catch(this.serviceErrorHandlingService.handleError);
        return entity;
    }

    public Set(fst: ChartOfFunds): Observable<ChartOfFunds>
    {
        let result : Observable<ChartOfFunds>;
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        let objectToSend = JSON.stringify(fst);
        
        if(fst.Id > 0){
            //UPDATE 
            result = this.http.put(this.apiUrl+'/Update', objectToSend, { headers: header})
                .map((r: Response) => 
                {
                    return r.json();
                } )  ;                      
        }
        else{
            //CREATE
            result =this.http.post(this.apiUrl+'/Save', objectToSend, { headers: header})  
               .map((r: Response) => r.json() );
        }

        return result;
    }

    public Delete(fstId: number): Observable<Response>{
        let result = this.http.delete(this.apiUrl+'/' + fstId)
        .catch(this.serviceErrorHandlingService.handleError) ;
        return result;
    }
}