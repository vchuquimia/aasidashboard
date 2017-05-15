import { Component, OnInit, ViewChild} from '@angular/core';
import { ExchangeAdjustmentAccountingConfig } from '../../../models/records/exchange-adjustment-accounting-config';
import { FundLite } from '../../../models/records/fund-lite';
import { ExchangeAdjustmentAccountingConfigService } from '../../../services/records/exchange-adjustment-accounting-config.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../services/session.service';

@Component({
    moduleId: module.id,
    selector: 'exchange-adjustment-accounting-config',
    templateUrl: 'exchange-adjustment-accounting-config.component.html'
})

export class ExchangeAdjustmentAccountingConfigComponent implements OnInit 
{
    public exchangeAdjustmentAccountingConfigs : Array<ExchangeAdjustmentAccountingConfig>;
    public selectedExchangeAdjustmentAccountingConfig : ExchangeAdjustmentAccountingConfig;
    constructor(public exchangeAdjustmentAccountingConfigService: ExchangeAdjustmentAccountingConfigService,
                private routerActive: ActivatedRoute,
                private router: Router,
                private ss: SessionService) 
    {
        this.selectedExchangeAdjustmentAccountingConfig = new ExchangeAdjustmentAccountingConfig({});
    }

    public getExchangeAdjustmentAccountingConfig(exchangeAdjustmentAccountingConfigId : number)
    {
        if(exchangeAdjustmentAccountingConfigId > 0)
        {    
            this.exchangeAdjustmentAccountingConfigService.getExchangeAdjustmentAccountingConfigById(exchangeAdjustmentAccountingConfigId).subscribe(p => {
            this.selectedExchangeAdjustmentAccountingConfig = p;
            }); 
        }  
        else
        {
            this.selectedExchangeAdjustmentAccountingConfig = new ExchangeAdjustmentAccountingConfig({
            })
        }
    }

    ngOnInit() 
    { 
        this.routerActive.params.subscribe(params => {
        let id = params['ExchangeAdjustmentAccountingConfigId'] as number;
        this.getExchangeAdjustmentAccountingConfig(id);
        });
    }

    public onFundSelectionChanged(fund: FundLite) 
    {
       // this.selectedExchangeAdjustmentAccountingConfig. = fund.Id.toString();
    }
    
    public onSubmit() 
    {
        this.exchangeAdjustmentAccountingConfigService.saveExchangeAdjustmentAccountingConfig(this.selectedExchangeAdjustmentAccountingConfig).subscribe(
        p =>{this.router.navigateByUrl("/search-exchange-adjustment-accounting-config");});
    }


       
}