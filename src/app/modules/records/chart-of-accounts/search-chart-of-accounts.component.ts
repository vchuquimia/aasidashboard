import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartOfAccountsService } from "../../../services/records/chart-of-accounts.service";
import { ChartOfAccounts } from "../../../models/records/chart-of-accounts";

@Component({
    moduleId: module.id,
    selector: 'search-chart-of-accounts',
    templateUrl: 'search-chart-of-accounts.component.html'
})

export class SearchChartOfAccountsComponent implements OnInit {
    
    //@ViewChild('sbsd') sbsd: SearchBox;
    public chartofaccountList : Array<ChartOfAccounts>;
    constructor(public chartofaccountService:ChartOfAccountsService) { }

    ngOnInit() {this.getchartOA(); }

    public getchartOA()
    {
        this.chartofaccountService.GetChartOfAccount("").subscribe(o=>{
            this.chartofaccountList=o;
        });
    }
    public Delete(id: number)
    {
        this.chartofaccountService.Delete(id).subscribe(o => {
            this.getchartOA();
        });
    }

    
}