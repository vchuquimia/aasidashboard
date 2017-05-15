import { Component, OnInit ,ViewChild} from '@angular/core';
import { StudentDegree} from '../../../models/records/student-degree';
import { StudentDegreeService} from '../../../services/records/student-degree.service';  
import { ComboBox} from '../../../core/components/combo-box.component';
import { SearchBox} from '../../../core/components/search-box.component';

@Component({  
    moduleId: module.id,
    selector: 'search-student-degree',
    templateUrl: 'search-student-degree.component.html'
})

export class SearchStudentDegreeComponent implements OnInit {
   
    @ViewChild('sbsd') sbsd: SearchBox;
    public StudentDegreeList : Array<StudentDegree>;
    constructor(public studentDegreeService:StudentDegreeService) { }

    ngOnInit() {this.getEstudent(); }

    public getEstudent()
    {
        this.studentDegreeService.GetStudentDegree("").subscribe(o=>{
            this.StudentDegreeList=o;
        });
    }
    public Delete(id: number)
    {
        this.studentDegreeService.Delete(id).subscribe(o => {
            this.getEstudent();
        });
    }

    public onsdSelectionChanged(std: StudentDegree){

    }

}