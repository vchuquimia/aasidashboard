import { Component, OnInit } from '@angular/core';
import { JournalTypeService } from '../../../services/records/journal-type.service';
import { JournalType } from '../../../models/records/journal-type';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'journal-type',
  templateUrl: './journal-type.component.html'
})
export class JournalTypeComponent implements OnInit {

  public journalType : JournalType;

  constructor(public jtService: JournalTypeService, private routerActive: ActivatedRoute, private router: Router) {
      this.journalType = new JournalType({});
   }

  ngOnInit() {
    this.routerActive.params.subscribe(params => {let id = params['Id'] as number; this.getJournalTypeReport(id)});
  }

  public getJournalTypeReport(jtId : number){
    if(jtId > 0)
    {
      this.jtService.GetById(jtId).subscribe(p => {this.journalType = p});
    }    
    else{
      this.journalType = new JournalType({});
    }
  }
  public saveJournalType(){
    this.jtService.Set(this.journalType).subscribe(p => {this.router.navigateByUrl("/records/search-journal-type");});
  }
  
}
