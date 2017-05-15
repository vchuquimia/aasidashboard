import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../services/records/currency.service';
import { Currency } from '../../../models/records/currency';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {

  public currency : Currency;

  constructor(public currencyService: CurrencyService, private routerActive: ActivatedRoute, private router: Router) {
      this.currency = new Currency({});
   }

  ngOnInit() {
    this.routerActive.params.subscribe(params => {let id = params['Id'] as number; this.getCurrencyReport(id)});
  }

  public getCurrencyReport(curId : number){
    if(curId > 0)
    {
      this.currencyService.GetById(curId).subscribe(p => {this.currency = p});
    }    
    else{
      this.currency = new Currency({});
    }
  }
  public saveCurrency(){
    this.currencyService.Set(this.currency).subscribe(p => {this.router.navigateByUrl("/records/search-currency");});
  }
  
}
