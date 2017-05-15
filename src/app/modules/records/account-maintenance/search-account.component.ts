import { Pager } from '../../../core/models/pager';
import {
  BasePager
} from '../../../core/models/base-pager';
import {
  AccountLiteService
} from '../../../services/records/account-lite.service';
import {
  AccountLite
} from '../../../models/records/account-lite';
import {
  LegalEntityService
} from '../../../services/records/legal-entity.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search-account',
  templateUrl: 'search-account.component.html'
})

export class SearchAccountComponent implements OnInit {
  public accounts: Array < AccountLite > =[];
  public filter: string;
  public pager: Pager;
  constructor(private accountLiteService: AccountLiteService) {}

  ngOnInit() {
    this.pager = new Pager();
    //this.search()
  }

  //   getCurrentEntity() {
  //     this.entityService.GetCurrentEntity().subscribe(r => {
  //       console.log('entity', r);
  //     });
  //   }

  // search() {
  //   this.pager.PageIndex = 0;
  //   this.accountLiteService.searchAccountLite(this.filter, 1, this.pager.RowsByPage, this.pager.PageIndex).subscribe(i => {
  //     this.accounts = i.Items;
  //     this.pager.TotalRows = i.Count;
  //   });
  // }

  // loadMore(){
  //   this.pager.PageIndex++;
  //   this.accountLiteService.searchAccountLite(this.filter, 1, this.pager.RowsByPage, this.pager.PageIndex).subscribe(i => {
  //     Array.prototype.push.apply(this.accounts, i.Items);
  //     this.pager.TotalRows = i.Count;
  //   });
  // }  

}
