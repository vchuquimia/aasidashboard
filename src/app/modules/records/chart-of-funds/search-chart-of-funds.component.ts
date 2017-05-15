import { Component, OnInit ,ViewChild} from '@angular/core';
import { ChartOfFunds} from '../../../models/records/chart-of-funds';
import { ChartOfFundsService} from '../../../services/records/chart-of-funds.service';  
import { ComboBox} from '../../../core/components/combo-box.component';
import { SearchBox} from '../../../core/components/search-box.component';

@Component({  
    moduleId: module.id,
    selector: 'search-chart-of-funds',
    templateUrl: 'search-chart-of-funds.component.html'
})

export class SearchChartOfFundsComponent implements OnInit {
   
    @ViewChild('sbsd') sbsd: SearchBox;
    public ChartOfFundsList : Array<ChartOfFunds>;
    constructor(public chartOfFundsService:ChartOfFundsService) { }

    ngOnInit() {this.getChart(); }

    public getChart()
    {
        this.chartOfFundsService.GetByFilter("").subscribe(o=>{
            this.ChartOfFundsList=o;
        });
    }
    public Delete(id: number)
    {
        this.chartOfFundsService.Delete(id).subscribe(o => {
            this.getChart();
        });
    }

    public onsdSelectionChanged(std: ChartOfFunds){

    }

}