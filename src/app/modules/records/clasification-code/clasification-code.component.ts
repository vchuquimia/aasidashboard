import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ClasificationCode} from '../../../models/records/clasification-code'
import {IRSTypeEnum} from '../../../models/records/irs-type-enum'
import {ClasificationCodeService} from '../../../services/records/clasification-code.service'
import {ComboBox} from '../../../core/components/combo-box.component'
import {Observable} from 'rxjs/Rx'
@Component({
    moduleId: module.id,
    selector: 'clasification-code',
    templateUrl: 'clasification-code.component.html'
})

export class ClasificationCodeComponent implements OnInit {

    @ViewChild('cbClasificationEnum') cbClasificationEnum: ComboBox;    
    public selectedClasificationCode: ClasificationCode;
    public listClasificationEnum: Array<string>;
    
    constructor(public ccs: ClasificationCodeService, private routerActive: ActivatedRoute,public router :Router) {

        this.selectedClasificationCode = new ClasificationCode({});

     }


    ngOnInit() { 
        let options = Object.keys(IRSTypeEnum);
        this.listClasificationEnum = options.slice(options.length/2);
        this.cbClasificationEnum.itemsSource = this.listClasificationEnum;
        this.cbClasificationEnum.populateSuggestions();
        this.routerActive.params.subscribe(params=> {
            let id = params['ccId'] as number
            this.getClasificationCode(id);
        })
    }

        public getClasificationCode(ccId:number)
        {
            if(ccId>0)
            {
                this.ccs.GetById(ccId).subscribe(p=> {

                    this.selectedClasificationCode = p as ClasificationCode;

                    
                    let cEnum = this.selectedClasificationCode.IRSTypeEnum;
                    let cEnumString = IRSTypeEnum[cEnum];
                    this.cbClasificationEnum.SelectedItem  = cEnumString;
                    
                })
            }
            else
            {
                this.selectedClasificationCode = new ClasificationCode({});
            }
        }
        public OnSumit()
        {
            this.ccs.Save(this.selectedClasificationCode).subscribe(p => {this.router.navigateByUrl('/records/search-clasification-code');

            });
        }

        public setClasificationEnum(value: number)
        {
              //  this.selectedClasificationCode.IRSTypeEnum =value;
        }

        public onClasificationEnumChanged(value:string)
        {
            let parse = IRSTypeEnum[value];
            this.selectedClasificationCode.IRSTypeEnum = parse;

        }

        

    
}