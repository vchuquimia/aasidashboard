import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../../../services/records/district.service';
import { District } from '../../../models/records/district';

@Component({
    moduleId: module.id,
    selector: 'search-district',
    templateUrl: 'search-district.component.html'
})

export class SearchDistrictComponent implements OnInit {

    public districtList: Array<District>;
    constructor(public distService: DistrictService) {
        this.districtList = new Array<District>();
     }

     public GetDistrictList(){
         this.distService.GetDistrict().subscribe(p => {this.districtList = p as Array<District>;});
     }

     public DeleteDistrict(distId:number){
         this.distService.DeleteDistrict(distId).subscribe(p => {this.GetDistrictList();});
     }

    ngOnInit() {
        this.GetDistrictList();
     }
}