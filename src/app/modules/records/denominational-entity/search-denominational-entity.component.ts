import { Component, OnInit } from '@angular/core';
import { DenominationalEntityService } from '../../../services/records/denominational-entity.service';
import { DenominationalEntity } from '../../../models/records/denominational-entity';

@Component({
    moduleId: module.id,
    selector: 'search-denominational-entity',
    templateUrl: 'search-denominational-entity.component.html'
})

export class SearchDenominationalEntityComponent implements OnInit {

    public denominationalList: Array<DenominationalEntity>;
    constructor(public denominationalService: DenominationalEntityService) {
        this.denominationalList = new Array<DenominationalEntity>();
     }

     public GetDenominationalList(){
         this.denominationalService.GetDenominational().subscribe(p => {this.denominationalList = p as Array<DenominationalEntity>;});
     }

     public Delete(distId:number){
         this.denominationalService.Delete(distId).subscribe(p => {this.GetDenominationalList();});
     }

    ngOnInit() {
        this.GetDenominationalList();
     }
}