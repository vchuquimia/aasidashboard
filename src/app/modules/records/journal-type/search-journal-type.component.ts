import { Component, OnInit } from '@angular/core';
import { JournalTypeService } from '../../../services/records/journal-type.service';
import { JournalType } from '../../../models/records/journal-type';

@Component({
    moduleId: module.id,
    selector: 'search-journal-type',
    templateUrl: 'search-journal-type.component.html'
})

export class SearchJournalTypeComponent implements OnInit {

    public journalTypeList: Array<JournalType>;
    constructor(public jtService: JournalTypeService) {
        this.journalTypeList = new Array<JournalType>();
     }

     public GetJournalTypeList(){
         this.jtService.GetJournalType().subscribe(p => {this.journalTypeList = p as Array<JournalType>;});
     }

     public DeleteJournalType(jtId:number){
         this.jtService.DeleteJournalType(jtId).subscribe(p => {this.GetJournalTypeList();});
     }

    ngOnInit() {
        this.GetJournalTypeList();
     }
}