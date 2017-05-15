import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder } from '@angular/http';
import { DistributionCode } from '../../models/records/distribution-code';
import { Observable,Subject, BehaviorSubject } from 'rxjs/Rx';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { HttpService } from '../../common/services/http.service';

@Injectable()
export class DistributionCodeService {

    private apiUrl = '/records/distributioncode';

    constructor(
        public http: HttpService, 
        public serviceErrorHandlingService: ServiceErrorHandlingService
    ) {

     }

     // ISearchService implementation
    public search(): Observable <Array<DistributionCode>> {
        return this.GetAll();
    }

    public GetAll(): Observable<Array<DistributionCode>>
    {
        const result = this.http.get(this.apiUrl + '/GetAll')
            .map((r: Response) => r.json()as DistributionCode)
            .catch(this.serviceErrorHandlingService.handleError);

        return result;
    }

    public GetById(fstId: number): Observable<DistributionCode>
    {
        const result = this.http.get(this.apiUrl + '/' + fstId + '/GetById')
            .map((r: Response) => r.json() as DistributionCode)
            .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

    public Save(fst: DistributionCode): Observable<DistributionCode>
    {
        let result: Observable<DistributionCode>;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const objectToSend = JSON.stringify(fst);

        if (fst.Id > 0) {
            // UPDATE 
            result = this.http.put(this.apiUrl + '/' + fst.Id + '/Update/', objectToSend, { headers: headers})
                .map((r: Response) => {
                    return r.json();
                });
        } else {
            // CREATE
            result = this.http.post(this.apiUrl + '/Save', objectToSend, { headers: headers})
               .map((r: Response) => r.json() );
        }

        return result;
    }

    public Delete(fstId: number): Observable<Response>{
        let result = this.http.delete(this.apiUrl + '/' + fstId + '/Delete')
        .catch(this.serviceErrorHandlingService.handleError) ;
        return result;
    }

}