import { Component, OnInit } from '@angular/core';
import { StandardDescription } from "app/models/records/standard-description";
import { StandardJournalDescriptionService } from "app/services/records/standard-journal-description.service";


@Component({
    moduleId: module.id,
    selector: 'search-standard-journal-description',
    templateUrl: 'search-standard-journal-description.component.html'
})

export class SearchStandardJournalDescriptionComponent implements OnInit {
    public standardDescriptionList: Array<StandardDescription>
    constructor(
        public standardDescriptionService : StandardJournalDescriptionService
    ) { }

    public  GetAll()
    {
        this.standardDescriptionService.GetAll().subscribe(p=>{
                    this.standardDescriptionList = p;
                });
    }

    public Delete(staId: number)
    {
        this.standardDescriptionService.Delete(staId)
        .subscribe(
        p => { this.GetAll(); });
    }

    ngOnInit() { 
        this.GetAll();
    }
}