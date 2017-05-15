import { IRSTypeEnum } from '../../../models/records/irs-type-enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartOfAccounts} from '../../../models/records/chart-of-accounts';
import { ChartOfAccountsService} from '../../../services/records/chart-of-accounts.service';  
import { ComboBox} from '../../../core/components/combo-box.component';
@Component({
    moduleId: module.id,
    selector: 'chart-of-accounts',
    templateUrl: 'chart-of-accounts.component.html'
})

export class ChartOfAccountComponent implements OnInit {

    @ViewChild('cbChartOfAccounts') cbChartOfAccounts: ComboBox;
    public Edit : Boolean;
    public selectedChartofAccount : ChartOfAccounts;   
    constructor(public chartOfAccountsService:ChartOfAccountsService,public routerActive:ActivatedRoute, public router:Router) 
    {
        this.selectedChartofAccount=new ChartOfAccounts({});
     }

    ngOnInit() {           
          this.chartOfAccountsService.GetDoesNootExistAuxiliar('').subscribe(o=>{
          this.cbChartOfAccounts.itemsSource=o
          this.cbChartOfAccounts.populateSuggestions();    
    })
      this.routerActive.params.subscribe(params=>{
        let id=params['coId'] as number;
        this.getchartOA(id);
      })
    }
    public getchartOA(id:number)
    {
        if(id==0){
            this.selectedChartofAccount = new ChartOfAccounts({});
        }
        else{
            this.chartOfAccountsService.GetById(id).subscribe(o=>{
            this.selectedChartofAccount=o;
        })
        }   
    }
    public onSubmit(){
      let send = this.selectedChartofAccount;
      this.chartOfAccountsService.Set(send)
          .subscribe(p=>{this.router.navigateByUrl("/search-chart-of-accounts");});

    }
    public onChartOfAccountSelected(chartOfAccounts: ChartOfAccounts) {  
      this.selectedChartofAccount.AuxiliaryChartOfAccount = chartOfAccounts;
    } 
}