import { SubAccountTypeEnum } from '../../../models/records/sub-account-type-discriminator';
import { Component, OnInit } from '@angular/core';
import {SubAccountType} from '../../../models/records/sub-account-type';
import {SubAccountTypeService} from '../../../services/records/sub-account-type.service';
@Component({
    moduleId: module.id,
    selector: 'search-sub-account-type',
    templateUrl: 'search-sub-account-type.component.html'
})

export class SearchSubAccountTypeComponent implements OnInit {

    public satList: Array<SubAccountType>;

    constructor(public satService: SubAccountTypeService){}

    ngOnInit() { this.getSubAccountTypeList();}

    public getSubAccountTypeList()
    {
       this.satService.GetAll().subscribe(r=> {this.satList  = r ; console.log(r);});
        
    } 
    public getSatEnum(satEnum:number): string
    {
        return SubAccountTypeEnum[satEnum];
    }

    public delete(satId:number)
    {
        this.satService.Delete(satId).subscribe(p=> {this.getSubAccountTypeList();});
    }
} 