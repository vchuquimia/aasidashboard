import { Component, OnInit } from '@angular/core';
import {ClasificationCode} from '../../../models/records/clasification-code'
import {IRSTypeEnum } from '../../../models/records/irs-type-enum'
import {ClasificationCodeService} from '../../../services/records/clasification-code.service'
@Component({
    moduleId: module.id,
    selector: 'search-clasification-code',
    templateUrl: 'search-clasification-code.component.html'
})

export class SearchClasificationCodeComponent implements OnInit {
    
    public ccParamList: Array<ClasificationCode>;
    
    constructor(public ccs:ClasificationCodeService) { }

    ngOnInit() { this.GetClasificationCode();}

    public GetClasificationCode() {
    this.ccs.GetAll().subscribe(r => {this.ccParamList = r; console.log(r);
      });
  }

  public delete(ccId: number)  
    {
               this.ccs.Delete(ccId).subscribe(
             p => { this.GetClasificationCode(); });
    }
    public getEnum(value:ClasificationCode) : string
    {
      return IRSTypeEnum[value.IRSTypeEnum]
    }
  

}
