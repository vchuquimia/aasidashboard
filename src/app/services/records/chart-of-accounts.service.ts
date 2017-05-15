import {Http, Response, URLSearchParams, Headers} from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import {HttpService} from '../../common/services/http.service';
import {ISearchService} from '../../core/components/ISearchService';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {ChartOfAccounts} from '../../models/records/chart-of-accounts';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
@Injectable()
export class ChartOfAccountsService implements ISearchService<ChartOfAccounts, string>{

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService) {
    } 
    private apiUrl = '/records/ChartOfAccount'; 

    public GetChartOfAccount(filter: string): Observable<Array<ChartOfAccounts>>{
         let params: URLSearchParams = new URLSearchParams();
         params.set('filter', filter);
         let sd = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<ChartOfAccounts>)
        .catch(this.serviceErrorHandlingService.handleError) ;
        return sd;
    }

    public search(filter: string): Observable<Array<ChartOfAccounts>>{

        return  this.GetChartOfAccount(filter);
       } 

    // public GetAll(): Observable<Array<ChartOfAccounts>>
    // {
    //     let fst = this.http.get('/api/ChartOfAccount')
    //         .map((r: Response) => r.json()as ChartOfAccounts)
    //         .catch(this.serviceErrorHandlingService.handleError);

    //     return fst;
    // }

    public GetById(fstId: number): Observable<ChartOfAccounts>
    {
        let entity = this.http.get(this.apiUrl+'/'+fstId)
            .map((r: Response) => r.json()as ChartOfAccounts)
            .catch(this.serviceErrorHandlingService.handleError);
        return entity;
    }

    public Set(fst: ChartOfAccounts): Observable<ChartOfAccounts>
    {
        let result : Observable<ChartOfAccounts>;
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
    public GetDoesNootExistAuxiliar(filter:string):Observable<Array<ChartOfAccounts>>{
            let params: URLSearchParams = new URLSearchParams();
            params.set('filter', filter);
            let result = this.http.get(this.apiUrl+'/GetDoesNootExistAuxiliar',{search:params})
            .map((r: Response) => r.json()as ChartOfAccounts)
            .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

    public Delete(fstId: number): Observable<Response>{
        let result = this.http.delete(this.apiUrl+'/' + fstId)
        .catch(this.serviceErrorHandlingService.handleError) ;
        return result;
    }
}