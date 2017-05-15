import { Http, Response, URLSearchParams } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { HttpService } from '../../common/services/http.service';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PaymentType } from '../../models/records/payment-type';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { Headers, QueryEncoder } from '@angular/http';

@Injectable()
export class PaymentTypeService implements ISearchService<PaymentType, string>{
    
    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
    {
    }
    
    private apiUrl = '/records/paymentType';

    public getPaymentType(filter: string): Observable<Array<PaymentType>>
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('filter', filter);
        let PaymentType = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<PaymentType>)
        .catch(this.serviceErrorHandlingService.handleError);
        return PaymentType;
    }

    public search(filter: string): Observable<Array<PaymentType>>
    {
        return  this.getPaymentType(filter);
    } 

    public getPaymentTypeById(paymentTypeId: number): Observable < PaymentType > 
    {
        let paymentTypes = this.http.get(this.apiUrl+'/'+ paymentTypeId)
        .map((r: Response) => r.json() as PaymentType)
        .catch(this.serviceErrorHandlingService.handleError);
        return paymentTypes;
    }
    
    public savePaymentType(paymentType: PaymentType): Observable < PaymentType > 
    {
        let result: Observable < PaymentType > ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let objectToSend = JSON.stringify(paymentType);

        if (paymentType.Id > 0) 
        {//UPDATE
            result = this.http.put(this.apiUrl,objectToSend, {headers: headers})
            .map((r: Response) => {
            //console.log('update result:', r)
            return r.json();});
        } 
        else 
        {//CREATE
            result = this.http.post(this.apiUrl, objectToSend, {
            headers: headers})
            .map((r: Response) => r.json());
        }

        return result;
    }
    
    public deletePaymentType(paymentTypeId: number): Observable < Response > 
    {
        let result = this.http.delete(this.apiUrl+'/'+ paymentTypeId)
        .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

}
