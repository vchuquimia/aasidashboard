import { Http, Response, URLSearchParams } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { HttpService } from '../../common/services/http.service';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Area } from '../../models/records/area';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { Headers, QueryEncoder } from '@angular/http';

@Injectable()
export class AreaService implements ISearchService<Area, string>{
    
    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
    {
    }
    
    private apiUrl = '/records/area';

    public getArea(filter: string): Observable<Array<Area>>
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('filter', filter);
        let Area = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<Area>)
        .catch(this.serviceErrorHandlingService.handleError);
        return Area;
    }

    public search(filter: string): Observable<Array<Area>>
    {
        return  this.getArea(filter);
    } 

    public getAreaById(areaId: number): Observable < Area > 
    {
        let areas = this.http.get(this.apiUrl+'/'+ areaId)
        .map((r: Response) => r.json() as Area)
        .catch(this.serviceErrorHandlingService.handleError);
        return areas;
    }
    
    public saveArea(area: Area): Observable < Area > 
    {
        let result: Observable < Area > ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let objectToSend = JSON.stringify(area);

        if (area.Id > 0) 
        {//UPDATE
            result = this.http.put(this.apiUrl+'/Update',objectToSend, {headers: headers})
            .map((r: Response) => {
            //console.log('update result:', r)
            return r.json();});
        } 
        else 
        {//CREATE
            result = this.http.post(this.apiUrl+'/Save', objectToSend, {
            headers: headers})
            .map((r: Response) => r.json());
        }

        return result;
    }
    
    public deleteArea(areaId: number): Observable < Response > 
    {
        let result = this.http.delete(this.apiUrl+'/'+ areaId)
        .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

}
