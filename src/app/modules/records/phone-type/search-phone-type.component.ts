import { Component, OnInit } from '@angular/core';
import { PhoneType } from "app/models/records/phone-type";
import { PhoneTypeService } from "app/services/records/phone-type.service";



@Component({
    moduleId: module.id,
    selector: 'search-phone-type',
    templateUrl: 'search-phone-type.component.html'
})

export class SearchPhoneTypeComponent implements OnInit {
    public phoneTypeList : Array<PhoneType>

    constructor(
        public phoneTypeService :PhoneTypeService
    ) 
       
        { 
    }

    
    public  GetAllPhoneTypes()
    {
        this.phoneTypeService.GetAll().subscribe(p=>{
                    this.phoneTypeList = p;
                });
    }

    public DeletePhoneType(phoneTypeId: number)
    {
        this.phoneTypeService.Delete(phoneTypeId)
        .subscribe(
        p => { this.GetAllPhoneTypes(); });
    }


    ngOnInit() { 
         this.GetAllPhoneTypes();
    }
}