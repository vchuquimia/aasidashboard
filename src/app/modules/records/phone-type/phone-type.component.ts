import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneType } from "app/models/records/phone-type";
import { PhoneTypeService } from "app/services/records/phone-type.service";

@Component({
    moduleId: module.id,
    selector: 'phone-type',
    templateUrl: 'phone-type.component.html'
})

export class PhoneTypeComponent implements OnInit {
    public selectedPhoneType: PhoneType;
    public phoneTypeId = 0;
    
    constructor(
        public phoneTypeService :PhoneTypeService,
        private router: Router,
        private routerActive: ActivatedRoute)
     { 
         this.selectedPhoneType = new PhoneType({});
     }

    ngOnInit() { 
         this.routerActive.params.subscribe(params => {
           let id = params['phoneTypeId'] as number
           ;
           this.GetPhoneType(id);
        });
    }

    public onSubmit() {
       this.phoneTypeService.Save(this.selectedPhoneType)
       .subscribe(p=>{this.router.navigateByUrl("/search-phone-type");});
    }

     public GetPhoneType(phoneTypeId: number){
        if(phoneTypeId>0){
            this.phoneTypeService.Get(phoneTypeId)
            .subscribe(
                p=>{
                    this.selectedPhoneType = p as PhoneType;
                    this.phoneTypeId = this.selectedPhoneType.Id;
                }
            )
        }
        else{
            this.selectedPhoneType =  new PhoneType({});
        }
    }
}