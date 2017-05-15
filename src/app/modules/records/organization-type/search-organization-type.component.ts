import { Component, OnInit } from '@angular/core';
import { OrganizationType } from "app/models/records/organization-type";
import { OrganizationTypeService } from "app/services/records/organization-type.service";



@Component({
    moduleId: module.id,
    selector: 'search-organization-type',
    templateUrl: 'search-organization-type.component.html'
})

export class SearchOrganizationTypeComponent implements OnInit {
    public orgTypeList : Array<OrganizationType>

    constructor(
        public orgTypeService :OrganizationTypeService) 
        { 
    }

    
    public  GetOrganizationTypes()
    {
        this.orgTypeService.GetAll().subscribe(p=>{
                    this.orgTypeList = p;
                });
    }

    public DeleteOrganizationType(orgTypeId: number)
    {
        this.orgTypeService.Delete(orgTypeId)
        .subscribe(
        p => { this.GetOrganizationTypes(); });
    }


    ngOnInit() { 
        this.GetOrganizationTypes();
    }
}