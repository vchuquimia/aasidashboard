import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../../../services/records/district.service';
import { District } from '../../../models/records/district';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  public district : District;

  constructor(public distService: DistrictService, private routerActive: ActivatedRoute, private router: Router) {
      this.district = new District({});
   }

  ngOnInit() {
    this.routerActive.params.subscribe(params => {let id = params['Id'] as number; this.getDistrictReport(id)});
  }

  public getDistrictReport(distId : number){
    if(distId > 0)
    {
      this.distService.GetById(distId).subscribe(p => {this.district = p});
    }    
    else{
      this.district = new District({});
    }
  }
  public saveDistrict(){
    this.distService.Set(this.district).subscribe(p => {this.router.navigateByUrl("/records/search-district");});
  }
  
}
