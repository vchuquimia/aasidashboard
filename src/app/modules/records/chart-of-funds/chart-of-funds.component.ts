import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartOfFunds} from '../../../models/records/chart-of-funds';
import { ChartOfFundsService} from '../../../services/records/chart-of-funds.service';  

@Component({  
    moduleId: module.id,
    selector: 'chart-of-funds',
    templateUrl: 'chart-of-funds.component.html'
})

export class ChartOfFundsComponent implements OnInit {
    public Edit : Boolean;
    public selectedChartOfFunds : ChartOfFunds;
    //public sdService: ChartOfFundsService;
    constructor(public chartOfFundsService:ChartOfFundsService,public routerActive:ActivatedRoute,public router:Router) 
    { 
        this.selectedChartOfFunds = new ChartOfFunds({});
        
    }

   ngOnInit() {
        this.routerActive.params.subscribe(params => {
           let id = params['sdId'] as number;
           this.getChartOfFunds(id);
        });
    }
    public getChartOfFunds(id: number)
    {
        if(id==0){
            this.selectedChartOfFunds = new ChartOfFunds({});
        }
        else{
            this.chartOfFundsService.GetById(id).subscribe(o=>{
            this.selectedChartOfFunds=o;
        })
        }       

    }
   
    public onSubmit() {
        let send = this.selectedChartOfFunds;
        //send.RegionCode="en-AU"
        this.chartOfFundsService.Set(send)
            .subscribe(p => { this.router.navigateByUrl("/search-chart-of-funds"); });
    }  

}