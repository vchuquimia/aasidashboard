import { IRSTypeEnum } from '../../../models/records/irs-type-enum';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistributionCode } from '../../../models/records/distribution-code';
import { DistributionCodeService } from '../../../services/records/distribution-code.service';
import { ComboBox } from '../../../core/components/combo-box.component';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'distribution-code',
    templateUrl: 'distribution-code.component.html'
})

export class DistributionCodeComponent implements OnInit {

    @ViewChild('cbIRSTypeEnum') cbIRSTypeEnum: ComboBox;
    public selectedDistributionCode: DistributionCode;
    public cbIRSTypeEnumList: Array<string>;

    constructor(public dcService: DistributionCodeService, private routerActive: ActivatedRoute, public router: Router) {
        this.selectedDistributionCode = new DistributionCode({});
     }


    ngOnInit() {
        let options = Object.keys(IRSTypeEnum);
        this.cbIRSTypeEnumList = options.slice(options.length / 2);
        this.cbIRSTypeEnum.itemsSource = this.cbIRSTypeEnumList;
        this.cbIRSTypeEnum.populateSuggestions();
        this.routerActive.params.subscribe(params => {
            const id = params['Id'] as number;
            this.getDistributionCode(id);
        });
    }

    public getDistributionCode(ccId: number)
    {
        if (ccId > 0) {
            this.dcService.GetById(ccId).subscribe(p => {
                this.selectedDistributionCode = p as DistributionCode;
                let cEnum = this.selectedDistributionCode.IRSTypeEnum;
                let cEnumString = IRSTypeEnum[cEnum];
                this.cbIRSTypeEnum.SelectedItem  = cEnumString;
            });
        } else {
            this.selectedDistributionCode = new DistributionCode({});
        }
    }

    public OnSumit()
    {
        this.dcService.Save(this.selectedDistributionCode)
        .subscribe(p => {
            this.router.navigateByUrl('/records/search-distribution-code');
        });
    }

    public setClasificationEnum(value: number)
    {
        // this.selectedDistributionCode.IRSTypeEnum =value;
    }

    public onDistributionEnumChanged(value: string)
    {
        const parse = IRSTypeEnum[value];
        this.selectedDistributionCode.IRSTypeEnum = parse;

    }
}
