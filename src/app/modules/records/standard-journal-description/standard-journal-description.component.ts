import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StandardJournalDescriptionService } from "app/services/records/standard-journal-description.service";
import { StandardDescription } from "app/models/records/standard-description";

@Component({
    moduleId: module.id,
    selector: 'standard-journal-description',
    templateUrl: 'standard-journal-description.component.html'
})

export class StandardJournalDescriptionComponent implements OnInit {
    public selectedStandardDescription: StandardDescription;
    public staDescriptionId;
    
    constructor(
        public staDescriptionService :StandardJournalDescriptionService,
        private router: Router,
        private routerActive: ActivatedRoute)
     { 
         this.selectedStandardDescription = new StandardDescription({});
     }

    ngOnInit() { 
         this.routerActive.params.subscribe(params => {
           let id = params['standardDescriptionId'] as number;
           this.GetStandardDescription(id);
        });
    }

    public onSubmit() {
       this.staDescriptionService.Save(this.selectedStandardDescription)
       .subscribe(p=>{this.router.navigateByUrl("/search-standard-journal-description");});
    }

     public GetStandardDescription(staDescriptionId: number){
        if(staDescriptionId>0){
            this.staDescriptionService.Get(staDescriptionId)
            .subscribe(
                p=>{
                    this.selectedStandardDescription = p as StandardDescription;
                    // this.staDescriptionId = this.selectedStandardDescription.Id;
                }
            )
        }
        else{
            this.selectedStandardDescription =  new StandardDescription({});
            this.selectedStandardDescription.LegalEntityId = 2;
        }
    }
}