import { Component, OnInit } from '@angular/core';
import { DenominationalEntityService } from '../../../services/records/denominational-entity.service';
import { DenominationalEntity } from '../../../models/records/denominational-entity';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'district',
  templateUrl: './denominational-entity.component.html'
})
export class DenominationalEntityComponent implements OnInit {

  public denominational : DenominationalEntity;

  constructor(public denominationalService: DenominationalEntityService, private routerActive: ActivatedRoute, private router: Router) {
      this.denominational = new DenominationalEntity({});
   }

  ngOnInit() {
    this.routerActive.params.subscribe(params => {let id = params['Id'] as number; this.getReport(id)});
  }

  public getReport(distId : number){
    if(distId > 0)
    {
      this.denominationalService.GetById(distId).subscribe(p => {this.denominational = p});
    }    
    else{
      this.denominational = new DenominationalEntity({});
    }
  }
  public save(){
    this.denominationalService.Set(this.denominational).subscribe(p => {this.router.navigateByUrl("/records/search-denominational-entity");});
  }
  
}
