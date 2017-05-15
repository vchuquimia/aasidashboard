import { Component, OnInit } from '@angular/core';
import { JournalTypeGroup } from '../../../models/records/journal-type-group';
import { JournalTypeGroupService } from '../../../services/records/journal-type-group.service'; 
@Component({
    moduleId: module.id,
    selector: 'search-journal-type-group',
    templateUrl: 'search-journal-type-group.component.html'
})

export class SearchJournalTypeGroupComponent implements OnInit 
{
    public journalTypeGroups : Array<JournalTypeGroup>;
    public SelectedItem : JournalTypeGroup;
    constructor(public journalTypeGroupService: JournalTypeGroupService) { }

    public getAllJournalTypeGroup()
    {
        this.journalTypeGroupService.getJournalTypeGroup("%").subscribe(p => {this.journalTypeGroups = p});
    }

    ngOnInit() 
    { 
        this.getAllJournalTypeGroup();
    }

    public deleteJournalTypeGroup(journalTypeGroupId: number)
    {
        this.journalTypeGroupService.deleteJournalTypeGroup(journalTypeGroupId).subscribe(
            p => { this.getAllJournalTypeGroup(); }
        );
    }

    public onSearchJournalTypeGroupChanged(objJournalTypeGroup : JournalTypeGroup)
    {
        
    }

}