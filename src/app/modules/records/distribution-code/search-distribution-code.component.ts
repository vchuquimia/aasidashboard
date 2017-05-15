import { Component, OnInit } from '@angular/core';
import { DistributionCode } from '../../../models/records/distribution-code';
import { IRSTypeEnum } from '../../../models/records/irs-type-enum';
import { DistributionCodeService } from '../../../services/records/distribution-code.service';

@Component({
    moduleId: module.id,
    selector: 'search-distribution-code',
    templateUrl: 'search-distribution-code.component.html'
})

export class SearchDistributionCodeComponent implements OnInit {

    public distributionCodeList: Array<DistributionCode>;

    constructor(public ccs: DistributionCodeService) { }

    ngOnInit() {
        this.GetDistributionCode();
    }

    public GetDistributionCode() {
        this.ccs.GetAll()
        .subscribe(r => {
            this.distributionCodeList = r;
            console.log(r);
        });
    }

    public delete(ccId: number) {
        this.ccs.Delete(ccId).subscribe( p => {
            this.GetDistributionCode();
        });
    }

    public getEnum(value: DistributionCode): string {
        return IRSTypeEnum[value.IRSTypeEnum];
    }
}