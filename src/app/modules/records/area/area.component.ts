import { Component, OnInit, ViewChild} from '@angular/core';
import { Area, OrganizationLevelEnum } from '../../../models/records/area';
import { AreaService } from '../../../services/records/area.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { ComboBox } from '../../../core/components/combo-box.component'; 


@Component({
    moduleId: module.id,
    selector: 'area',
    templateUrl: 'area.component.html'
})

export class AreaComponent implements OnInit {

    @ViewChild('cbOrganizationLevelEnum') cbOrganizationLevelEnum: ComboBox
    public listOrganizationLevelEnum: Array<string>;

    public Areas : Array<Area>;
    public selectedArea: Area;
    constructor(public areaService: AreaService,
                private routerActive: ActivatedRoute,
                private router: Router,
                private ss: SessionService 
            ) {
                this.selectedArea = new Area({});
            }

public GetArea(areaId : number){
    if(areaId > 0)
    {    
        this.areaService.getAreaById(areaId).subscribe(p => {
                this.selectedArea = p;
                let varEnum = this.selectedArea.OrganizationLevelEnum;
                let varEnumString = OrganizationLevelEnum[varEnum];
                this.cbOrganizationLevelEnum.SelectedItem = varEnumString;
            }); 
    }  
    else{
            this.selectedArea = new Area({})
        }
    }

    ngOnInit() { 
        let options = Object.keys(OrganizationLevelEnum);
        this.listOrganizationLevelEnum = options.slice(options.length/2);
        this.cbOrganizationLevelEnum.itemsSource = this.listOrganizationLevelEnum;
        this.cbOrganizationLevelEnum.populateSuggestions();
        this.routerActive.params.subscribe(params => {
            let id = params['AreaId'] as number;
            this.GetArea(id);
        });
    }

    public onSubmit() {
        this.areaService.saveArea(this.selectedArea).subscribe(
                p =>{this.router.navigateByUrl("/search-area");});

    }

    public onOrganizationLevelEnumChanged(valueEnum : string)
    {
        let parse = OrganizationLevelEnum[valueEnum];
        this.selectedArea.OrganizationLevelEnum = parse;
    }
   
}