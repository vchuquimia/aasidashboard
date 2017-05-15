import { Http, Response, URLSearchParams } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { HttpService } from '../../common/services/http.service';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ExchangeAdjustmentAccountingConfig } from '../../models/records/exchange-adjustment-accounting-config';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { Headers, QueryEncoder } from '@angular/http';

@Injectable()
export class ExchangeAdjustmentAccountingConfigService implements ISearchService<ExchangeAdjustmentAccountingConfig, string>
{
    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
    {
    }
    private apiUrl = '/records/ExchangeAdjustmentAccountingConfig';
    public getExchangeAdjustmentAccountingConfig(filter: string): Observable<Array<ExchangeAdjustmentAccountingConfig>>
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('filter', filter);
        let exchangeAdjustmentAccountingConfig = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<ExchangeAdjustmentAccountingConfig>)
        .catch(this.serviceErrorHandlingService.handleError);
        return exchangeAdjustmentAccountingConfig;
    }

    public search(filter: string): Observable<Array< ExchangeAdjustmentAccountingConfig >>
    {
        return this.getExchangeAdjustmentAccountingConfig(filter);
    } 

    public getExchangeAdjustmentAccountingConfigById(exchangeAdjustmentAccountingConfigId: number): Observable <ExchangeAdjustmentAccountingConfig> 
    {
        let exchangeAdjustmentAccountingConfig = this.http.get(this.apiUrl+'/'+ exchangeAdjustmentAccountingConfigId)
        .map((r: Response) => r.json() as ExchangeAdjustmentAccountingConfig)
        .catch(this.serviceErrorHandlingService.handleError);
        return exchangeAdjustmentAccountingConfig;
    }
    
    public saveExchangeAdjustmentAccountingConfig(exchangeAdjustmentAccountingConfig : ExchangeAdjustmentAccountingConfig): Observable <ExchangeAdjustmentAccountingConfig>
    {
        let exchangeAdjustmentAccountingConfigResult : Observable <ExchangeAdjustmentAccountingConfig>;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let objectToSend = JSON.stringify(exchangeAdjustmentAccountingConfig);

        if (exchangeAdjustmentAccountingConfig.Id > 0) 
        {//UPDATE
            exchangeAdjustmentAccountingConfigResult = this.http.put(this.apiUrl+'/Update', 
            objectToSend, {headers: headers})
            .map((r: Response) => {
            //console.log('update result:', r)
            return r.json();});
        } 
        else 
        {//CREATE
            exchangeAdjustmentAccountingConfigResult = this.http.post(this.apiUrl+'/Save', objectToSend, {
            headers: headers})
            .map((r: Response) => r.json());
        }

        return exchangeAdjustmentAccountingConfigResult;
    }
    
    public deleteExchangeAdjustmentAccountingConfig(exchangeAdjustmentAccountingConfigId: number) : Observable <Response>
    {
        let exchangeAdjustmentAccountingConfigResult = this.http.delete(this.apiUrl+'/'+ exchangeAdjustmentAccountingConfigId)
        .catch(this.serviceErrorHandlingService.handleError);
        return exchangeAdjustmentAccountingConfigResult;
    }

}
