import { Http, Response, URLSearchParams } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { HttpService } from '../../common/services/http.service';
import { ISearchService } from '../../core/components/ISearchService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { JournalTypeGroup } from '../../models/records/journal-type-group';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { Headers, QueryEncoder } from '@angular/http';

@Injectable()
export class JournalTypeGroupService implements ISearchService<JournalTypeGroup, string>
{
    constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
    {
    }
    private apiUrl = '/records/journalTypeGroup';
    public getJournalTypeGroup(filter: string): Observable<Array<JournalTypeGroup>>
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('filter', filter);
        let JournalTypeGroup = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<JournalTypeGroup>)
        .catch(this.serviceErrorHandlingService.handleError);
        return JournalTypeGroup;
    }

    public search(filter: string): Observable<Array< JournalTypeGroup >>
    {
        return this.getJournalTypeGroup(filter);
    } 

    public getJournalTypeGroupById(journalTypeGroupId: number): Observable < JournalTypeGroup > 
    {
        let journalTypeGroup = this.http.get(this.apiUrl+'/'+ journalTypeGroupId)
        .map((r: Response) => r.json() as JournalTypeGroup)
        .catch(this.serviceErrorHandlingService.handleError);
        return journalTypeGroup;
    }
    
    public saveJournalTypeGroup(journalTypeGroup: JournalTypeGroup): Observable < JournalTypeGroup > 
    {
        let result: Observable < JournalTypeGroup > ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let objectToSend = JSON.stringify(journalTypeGroup);

        if (journalTypeGroup.Id > 0) 
        {//UPDATE
            result = this.http.put(this.apiUrl+'/Update', objectToSend, {headers: headers})
            .map((r: Response) => {
            //console.log('update result:', r)
            return r.json();});
        } 
        else 
        {//CREATE
            result = this.http.post(this.apiUrl+'/save', objectToSend, {
            headers: headers})
            .map((r: Response) => r.json());
        }

        return result;
    }
    
    public deleteJournalTypeGroup(journalTypeGroupId: number): Observable < Response > 
    {
        let result = this.http.delete(this.apiUrl+'/'+  journalTypeGroupId)
        .catch(this.serviceErrorHandlingService.handleError);
        return result;
    }

}
