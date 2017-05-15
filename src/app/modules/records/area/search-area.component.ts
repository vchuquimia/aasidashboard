import { Component, OnInit } from '@angular/core';
import { Area, OrganizationLevelEnum } from '../../../models/records/area';
import { AreaService } from '../../../services/records/area.service'; 

@Component({
    moduleId: module.id,
    selector: 'search-area',
    templateUrl: 'search-area.component.html'
})

export class SearchAreaComponent implements OnInit {
    public Areas : Array<Area>;
    public SelectedItem : Area;
    constructor(public areaService: AreaService) { }

public getAllArea(){
    this.areaService.getArea("%").subscribe(p => {this.Areas = p});
}

    ngOnInit() { 
        this.getAllArea();
    }


  public deleteArea(areaId: number)
    {
        this.areaService.deleteArea(areaId).subscribe(
            p => { this.getAllArea(); }
        );
    }   

    public getEnum(objArea : Area):string
    {
        return OrganizationLevelEnum[objArea.OrganizationLevelEnum];
    }

    public onSearchAreaChanged(objArea : Area)
    {
        
    }
}