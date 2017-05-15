import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { HttpService } from "../../common/services/http.service";
import { httpFactory } from '@angular/http/src/http_module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ClasificationCode} from '../../models/records/clasification-code';
import { ServiceErrorHandlingService } from '.././service-error-handling.service';
import { ISearchService } from '../../core/components/ISearchService';
@Injectable()
export class ClasificationCodeService {

    private apiUrl = '/records/clasificationcode';

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService) {
    }


    public Delete(ccId: number): Observable<Response> {
        let result = this.http.delete(this.apiUrl + '/' + ccId + '/Delete')
            .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

    public Save(cc: ClasificationCode): Observable<ClasificationCode> {
        let result: Observable<ClasificationCode>;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let objectToSend = JSON.stringify(cc);

        if (cc.Id > 0) {
            //UPDATE 
            result = this.http.put(this.apiUrl + '/' + cc.Id + '/Update/', objectToSend, { headers: headers })
                .map((r: Response) => {
                    return r.json();
                });
        }
        else {
            //CREATE
            result = this.http.post(this.apiUrl + '/Save', objectToSend, { headers: headers })
                .map((r: Response) => r.json());
        }

        return result;
    }
 
    // public search(): Observable<Array<ClasificationCode>> {
    //     return this.GetAll();
    // }

    public GetAll(): Observable<Array<ClasificationCode>> {
        let cc = this.http.get(this.apiUrl + '/GetAll')
            .map((r: Response) => r.json() as ClasificationCode)
            .catch(this.serviceErrorHandlingService.handleError);
        return cc;
    }

    public GetByName(ccName: string): Observable<Array<ClasificationCode>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('name', ccName);
        let cc = this.http.get('/api/ClasificationCode/', { search: params })
            .map((r: Response) => r.json() as ClasificationCode)
            .catch(this.serviceErrorHandlingService.handleError);

        return cc;
    }

    public GetById(ccId: number): Observable<ClasificationCode> {
        let entity = this.http.get(this.apiUrl + '/' + ccId + '/GetById')
            .map((r: Response) => r.json() as ClasificationCode)
            .catch(this.serviceErrorHandlingService.handleError);
        return entity;
    }
  
}