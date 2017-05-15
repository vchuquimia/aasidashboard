import { RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import {LegalEntityLite} from '../../models/legal-entity-lite';
import {AgregateLegalEntity} from '../../models/agregate-legal-entity';
import { Observable,Subject, BehaviorSubject } from 'rxjs/Rx';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { HttpService } from '../../common/services/http.service';


@Injectable()
export class LegalEntityService {
    public isSelectedEntityAnAcademy: BehaviorSubject<boolean> ;
    public showExperimentalFeatures: BehaviorSubject<boolean> ;

    private apiUrl = '/records/legalentity';

    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService) {
        this.isSelectedEntityAnAcademy = new BehaviorSubject<boolean>(true);
        this.showExperimentalFeatures = new BehaviorSubject<boolean>(false); 
    }

    public getAccountingEntities(): Observable<Array<LegalEntityLite>> {
        // const params = new URLSearchParams();
        // params.set('entidada', '1');
        // params.set('entidad', '2');
        // params.set('entidaa', '3');
        // params.set('entida', '4');

        let entities = this.http.get(this.apiUrl + '/GetEntitiesAccounting')
        .map((r: Response) => r.json() as Array<LegalEntityLite>)
        .catch(this.serviceErrorHandlingService.handleError) ;
        return entities; 
    }

    public setAccountingEntity(entityId: number): Observable<LegalEntityLite> {

        let entities = this.http.get('/api/legalentity/' + entityId)
        .map((r: Response) => r.json() as LegalEntityLite)
        .catch(this.serviceErrorHandlingService.handleError) ;
        return entities;
    }

    public setAccountEntity(code: string): Observable<LegalEntityLite>
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('code', code);

        let entity = this.http.get('/api/legalentity/', { search: params })
        .map((r: Response) => r.json() as LegalEntityLite )
        .catch(this.serviceErrorHandlingService.handleError);

        return entity;
    }

    public GetByFilter(filter: string): Observable<Array<LegalEntityLite>>
    {
        let params: URLSearchParams = new URLSearchParams();
         params.set('filter', filter);

        let entities = this.http.get('/api/legalentity', {search: params})
        .map((r: Response) => r.json() as Array<LegalEntityLite>)
        .catch(this.serviceErrorHandlingService.handleError);
        return entities;
    }

    public search(filter: string): Observable<Array<LegalEntityLite>>
    {
        return this.GetByFilter(filter);
    }

    public GetCurrentEntity(): Observable<Array<Response>>
    {
        let response = this.http.get('/api/gender/current')
        .map((r: Response) => r.json() )
        .catch(this.serviceErrorHandlingService.handleError) ;
        return response;
    }
    
    public GetByLoggedLegalEntity(): Observable<Array<LegalEntityLite>> 
    {
        let entities = this.http.get('/api/AgregateLegalEntity')
        .map((r: Response) => r.json() as Array<LegalEntityLite>)
        .catch(this.serviceErrorHandlingService.handleError) ;
        return entities;
    }
    
    public IsSelectedEntityAnAcademy(): Observable<boolean> 
    {
        let entities = this.http.get('/api/EntityAcademic')
        .map((r: Response) => r.json() as boolean)
        .catch(this.serviceErrorHandlingService.handleError) ;
        return entities;
    }

}