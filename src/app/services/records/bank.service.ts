import { Http, Response, URLSearchParams } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { HttpService } from '../../common/services/http.service';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Bank } from '../../models/records/bank';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { Headers, QueryEncoder } from '@angular/http';

@Injectable()
export class BankService implements ISearchService<Bank, string>{
    
    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
    {
    }
    
    private apiUrl = '/records/bank';

    public getBank(filter: string): Observable<Array<Bank>>
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('filter', filter);
        let Bank = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<Bank>)
        .catch(this.serviceErrorHandlingService.handleError);
        return Bank;
    }

    public search(filter: string): Observable<Array<Bank>>
    {
        return  this.getBank(filter);
    } 

    public getBankById(bankId: number): Observable < Bank > 
    {
        let banks = this.http.get(this.apiUrl+'/'+ bankId)
        .map((r: Response) => r.json() as Bank)
        .catch(this.serviceErrorHandlingService.handleError);
        return banks;
    }
    
    public saveBank(bank: Bank): Observable < Bank > 
    {
        let result: Observable < Bank > ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let objectToSend = JSON.stringify(bank);

        if (bank.Id > 0) 
        {//UPDATE
            result = this.http.put(this.apiUrl,objectToSend, {headers: headers})
            .map((r: Response) => {
            //console.log('update result:', r)
            return r.json();});
        } 
        else 
        {//CREATE
            result = this.http.post(this.apiUrl , objectToSend, {
            headers: headers})
            .map((r: Response) => r.json());
        }

        return result;
    }
    
    public deleteBank(bankId: number): Observable < Response > 
    {
        let result = this.http.delete(this.apiUrl+'/'+ bankId)
        .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

}
