import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../services/records/currency.service';
import { Currency } from '../../../models/records/currency';

@Component({
    moduleId: module.id,
    selector: 'search-currency',
    templateUrl: 'search-currency.component.html'
})

export class SearchCurrencyComponent implements OnInit {

    public currencyList: Array<Currency>;
    constructor(public currencyService: CurrencyService) {
        this.currencyList = new Array<Currency>();
     }

     public GetCurrencyList(){
         this.currencyService.GetCurrency().subscribe(p => {this.currencyList = p as Array<Currency>;});
     }

     public DeleteCurrency(distId:number){
         this.currencyService.DeleteCurrency(distId).subscribe(p => {this.GetCurrencyList();});
     }

    ngOnInit() {
        this.GetCurrencyList();
     }
}