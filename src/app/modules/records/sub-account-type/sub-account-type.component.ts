import { SubAccountTypeEnum } from '../../../models/records/sub-account-type-discriminator';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SubAccountType} from '../../../models/records/sub-account-type'
import {SubAccountTypeService} from '../../../services/records/sub-account-type.service'
import {ComboBox} from '../../../core/components/combo-box.component'
import {Observable} from 'rxjs/Rx'
@Component({
    moduleId: module.id,
    selector: 'sub-account-type',
    templateUrl: 'sub-account-type.component.html'
})

export class SubAccountTypeComponent implements OnInit {

    @ViewChild('cbSubAccountTypeEnum') cbSubAccountTypeEnum; ComboBox;
    public selectedSubAccountType: SubAccountType;
    public listSubAccountTypeEnum: Array<string>;   


    constructor(public satService: SubAccountTypeService, private routeActive: ActivatedRoute, public router: Router) 
    {
        this.selectedSubAccountType = new SubAccountType({});
     }
  
    ngOnInit() {
        // fill comobobox with enum
        let options = Object.keys(SubAccountTypeEnum);
        this.listSubAccountTypeEnum = options.slice(options.length/2);
        this.cbSubAccountTypeEnum.itemsSource = this.listSubAccountTypeEnum;
        this.cbSubAccountTypeEnum.populateSuggestions();

        this.routeActive.params.subscribe(params => {
            let id = params['satId'] as number
            this.getSubAccountType(id);
        })
     }

     public getSubAccountType(satId:number)
        {
            if(satId>0)
            {
                this.satService.Get(satId).subscribe(p=> {

                    this.selectedSubAccountType = p as SubAccountType;
                    
                    let satEnum = this.selectedSubAccountType.SubAccountTypeEnum;
                    let satEnumString = SubAccountTypeEnum[satEnum];
                    this.cbSubAccountTypeEnum.SelectedItem  = satEnumString;
                    
                })
            }
            else
            {
                this.selectedSubAccountType = new SubAccountType({});
            }
        }

    public OnSumit()
    {
        this.satService.Save(this.selectedSubAccountType).subscribe
        (p=> {this.router.navigateByUrl('/records/search-sub-account-type');
        });
    }

    public onSubAccountTypeEnumChanged(value:string)
        {
            let parse = SubAccountTypeEnum[value];
            this.selectedSubAccountType.SubAccountTypeEnum = parse;

        }

}