import { Component, OnInit } from '@angular/core';
import { Bank } from '../../../models/records/bank';
import { BankService } from '../../../services/records/bank.service'; 

@Component({
    moduleId: module.id,
    selector: 'search-bank',
    templateUrl: 'search-bank.component.html'
})

export class SearchBankComponent implements OnInit {
    public Banks : Array<Bank>;
    public SelectedItem : Bank;
    constructor(public bankService: BankService) { }

public getAllBank(){
    this.bankService.getBank("%").subscribe(p => {this.Banks = p});
}

    ngOnInit() { 
        this.getAllBank();
    }


  public deleteBank(bankId: number)
    {
        this.bankService.deleteBank(bankId).subscribe(
            p => { this.getAllBank(); }
        );
    }   


    public onSearchBankChanged(objBank : Bank)
    {
        
    }
}