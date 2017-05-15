import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentDegree} from '../../../models/records/student-degree';
import { StudentDegreeService} from '../../../services/records/student-degree.service';  

@Component({  
    moduleId: module.id,
    selector: 'student-degree',
    templateUrl: 'student-degree.component.html'
})

export class StudentDegreeComponent implements OnInit {
    public Edit : Boolean;
    public selectedStudentDegree : StudentDegree;
    //public sdService: StudentDegreeService;
    constructor(public StudentDegreeService:StudentDegreeService,public routerActive:ActivatedRoute,public router:Router) 
    { 
        this.selectedStudentDegree = new StudentDegree({});
        
    }

   ngOnInit() {
        this.routerActive.params.subscribe(params => {
           let id = params['sdId'] as number;
           this.getStudentDegree(id);
        });
    }
    public getStudentDegree(id: number)
    {
        if(id==0){
            this.selectedStudentDegree = new StudentDegree({});
        }
        else{
            this.StudentDegreeService.GetById(id).subscribe(o=>{
            this.selectedStudentDegree=o;
        })
        }       

    }
   
    public onSubmit() {
        let send = this.selectedStudentDegree;
        send.RegionCode="en-AU"
        this.StudentDegreeService.Set(send)
            .subscribe(p => { this.router.navigateByUrl("/search-student-degree"); });
    }  

}