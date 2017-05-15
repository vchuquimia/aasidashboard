import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationType } from "app/models/records/organization-type";
import { OrganizationTypeService } from "app/services/records/organization-type.service";
@Component({
    moduleId: module.id,
    selector: 'organization-type',
    templateUrl: 'organization-type.component.html'
})

export class OrganizationTypeComponent implements OnInit {
    public selectedOrganizationType: OrganizationType;
    public organizationTypeId = 0;
    
    constructor(
        public orgTypeService :OrganizationTypeService,
        private router: Router,
        private routerActive: ActivatedRoute
        ) 
        { 
            this.selectedOrganizationType = new OrganizationType({});
    }

    ngOnInit() { 
        this.routerActive.params.subscribe(params => {
           let id = params['orgTypeId'] as number;
           this.GetOrganizationType(id);
        });
    }

    public onSubmit() {
       this.orgTypeService.Save(this.selectedOrganizationType)
       .subscribe(p=>{this.router.navigateByUrl("/search-organization-type");});
       
    }

    public GetOrganizationType(orgTypeId: number){
        if(orgTypeId>0){
            this.orgTypeService.Get(orgTypeId)
            .subscribe(
                p=>{
                    this.selectedOrganizationType = p as OrganizationType;
                    this.organizationTypeId = this.selectedOrganizationType.Id;
                }
            )
        }
        else{
            this.selectedOrganizationType =  new OrganizationType({});
        }
    }
}