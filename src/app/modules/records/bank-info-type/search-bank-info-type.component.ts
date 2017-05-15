import { Component, OnInit } from '@angular/core';
import { BankInfoTypeService } from '../../../services/records/bank-info-type.service';
import { BankInfoType } from '../../../models/records/bank-info-type';

@Component({
    moduleId: module.id,
    selector: 'search-bank-info-type',
    templateUrl: 'search-bank-info-type.component.html'
})

export class SearchBankInfoTypeComponent implements OnInit {

    public bankInfoTypeList: Array<BankInfoType>;
    constructor(public distService: BankInfoTypeService) {
        this.bankInfoTypeList = new Array<BankInfoType>();
     }

     public GetBankInfoTypeList(){
         this.distService.GetBankInfoType().subscribe(p => {this.bankInfoTypeList = p as Array<BankInfoType>;});
     }

     public DeleteBankInfoType(bankInfoTypeId:number){
         this.distService.DeleteBankInfoType(bankInfoTypeId).subscribe(p => {this.GetBankInfoTypeList();});
     }

    ngOnInit() {
        this.GetBankInfoTypeList();
     }
}