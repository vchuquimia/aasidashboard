import { Component, OnInit } from '@angular/core';
import { ExchangeAdjustmentAccountingConfig } from '../../../models/records/exchange-adjustment-accounting-config';
import { ExchangeAdjustmentAccountingConfigService } from '../../../services/records/exchange-adjustment-accounting-config.service'; 

@Component({
    moduleId: module.id,
    selector: 'search-exchange-adjustment-accounting-config',
    templateUrl: 'search-exchange-adjustment-accounting-config.component.html'
})

export class SearchExchangeAdjustmentAccountingConfigComponent implements OnInit 
{
    public exchangeAdjustmentAccountingConfigs : Array<ExchangeAdjustmentAccountingConfig>;
    public selectedItem : ExchangeAdjustmentAccountingConfig;
    constructor(public exchangeAdjustmentAccountingConfigService : ExchangeAdjustmentAccountingConfigService) { }

    public getAllExchangeAdjustmentAccountingConfig()
    {
        this.exchangeAdjustmentAccountingConfigService.getExchangeAdjustmentAccountingConfig("%")
        .subscribe(
            p => 
            {
                this.exchangeAdjustmentAccountingConfigs = p
            });
    }

    ngOnInit() 
    { 
        this.getAllExchangeAdjustmentAccountingConfig();
    }

    public deleteExchangeAdjustmentAccountingConfig(exchangeAdjustmentAccountingConfigId: number)
    {
        this.exchangeAdjustmentAccountingConfigService.deleteExchangeAdjustmentAccountingConfig(exchangeAdjustmentAccountingConfigId).subscribe(
            p => { this.getAllExchangeAdjustmentAccountingConfig(); }
        );
    }
}