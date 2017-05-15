import { Injectable } from '@angular/core';
import { Http, Response,Headers, URLSearchParams } from '@angular/http';
import { LegalEntityLite} from '../../models/legal-entity-lite';
import { AgregateLegalEntity} from '../../models/agregate-legal-entity';
import { Observable,Subject, BehaviorSubject } from 'rxjs/Rx';
import { ServiceErrorHandlingService } from '../service-error-handling.service';
import { HttpService } from '../../common/services/http.service';
import {ISearchService} from '../../core/components/ISearchService';
import {StudentDegree} from '../../models/records/student-degree';

@Injectable()
export class StudentDegreeService implements ISearchService<StudentDegree, string>{

  constructor(public http: HttpService, public serviceErrorHandlingService: ServiceErrorHandlingService)
   {}
   private apiUrl = '/records/StudentDegree'; 

   public GetStudentDegree(filter: string): Observable<Array<StudentDegree>>{
         let params: URLSearchParams = new URLSearchParams();
         params.set('filter', filter);
       let sd = this.http.get(this.apiUrl+'/GetByFilter', {search: params})
        .map((r: Response) => r.json() as Array<StudentDegree>)
        .catch(this.serviceErrorHandlingService.handleError) ;
         return sd;
    }

    public search(filter: string): Observable<Array<StudentDegree>>{

        return  this.GetStudentDegree(filter);
       } 

    // public GetAll(): Observable<Array<StudentDegree>>
    // {
    //     let fst = this.http.get(this.apiUrl)
    //         .map((r: Response) => r.json()as StudentDegree)
    //         .catch(this.serviceErrorHandlingService.handleError);

    //     return fst;
    // }

    public GetById(fstId: number): Observable<StudentDegree>
    {
        let entity = this.http.get(this.apiUrl+'/'+fstId)
            .map((r: Response) => r.json()as StudentDegree)
            .catch(this.serviceErrorHandlingService.handleError);
        return entity;
    }

    public Set(fst: StudentDegree): Observable<StudentDegree>
    {
        let result : Observable<StudentDegree>;
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