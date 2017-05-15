import { Component, OnInit, ViewChild} from '@angular/core';
import { Bank } from '../../../models/records/bank';
import { BankService } from '../../../services/records/bank.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { ComboBox } from '../../../core/components/combo-box.component'; 


@Component({
    moduleId: module.id,
    selector: 'bank',
    templateUrl: 'bank.component.html'
})

export class BankComponent implements OnInit {

    @ViewChild('cbOrganizationLevelEnum') cbOrganizationLevelEnum: ComboBox
    public listOrganizationLevelEnum: Array<string>;

    public Banks : Array<Bank>;
    public selectedBank: Bank;
    constructor(public bankService: BankService,
                private routerActive: ActivatedRoute,
                private router: Router,
                private ss: SessionService 
            ) {
                this.selectedBank = new Bank({});
            }

public GetBank(bankId : number){
    if(bankId > 0)
    {    
        this.bankService.getBankById(bankId).subscribe(p => {
                this.selectedBank = p;
            }); 
    }  
    else{
            this.selectedBank = new Bank({})
        }
    }

    ngOnInit() { 
        this.routerActive.params.subscribe(params => {
            let id = params['BankId'] as number;
            this.GetBank(id);
        });
    }

    public onSubmit() {
        this.bankService.saveBank(this.selectedBank).subscribe(
                p =>{this.router.navigateByUrl("/search-bank");});

    }
   
}