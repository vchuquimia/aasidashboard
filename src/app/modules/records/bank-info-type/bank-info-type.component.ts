import { Component, OnInit } from '@angular/core';
import { BankInfoTypeService } from '../../../services/records/bank-info-type.service';
import { BankInfoType } from '../../../models/records/bank-info-type';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'bank-info-type',
  templateUrl: './bank-info-type.component.html'
})
export class BankInfoTypeComponent implements OnInit {

  public bankInfoType : BankInfoType;

  constructor(public bitService: BankInfoTypeService, private routerActive: ActivatedRoute, private router: Router) {
      this.bankInfoType = new BankInfoType({});
   }

  ngOnInit() {
    this.routerActive.params.subscribe(params => {let id = params['Id'] as number; this.getBankInfoTypeReport(id)});
  }

  public getBankInfoTypeReport(bankInfoTypeId : number){
    if(bankInfoTypeId > 0)
    {
      this.bitService.GetById(bankInfoTypeId).subscribe(p => {this.bankInfoType = p});
    }    
    else{
      this.bankInfoType = new BankInfoType({});
    }
  }
  public saveBankInfoType(){
    this.bitService.Set(this.bankInfoType).subscribe(p => {this.router.navigateByUrl("/records/search-bank-info-type");});
  }
  
}
