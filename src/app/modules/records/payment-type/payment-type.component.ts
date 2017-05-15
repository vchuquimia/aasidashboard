import { Component, OnInit, ViewChild} from '@angular/core';
import { PaymentType, PaymentTypeEnum } from '../../../models/records/payment-type';
import { PaymentTypeService } from '../../../services/records/payment-type.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { ComboBox } from '../../../core/components/combo-box.component'; 
@Component({
    moduleId: module.id,
    selector: 'payment-type',
    templateUrl: 'payment-type.component.html'
})

export class PaymentTypeComponent implements OnInit 
{
    @ViewChild('cbPaymentTypeEnum') cbPaymentTypeEnum: ComboBox
    public listPaymentTypeEnum: Array<string>;
    public paymentTypes : Array<PaymentType>;
    public selectedPaymentType: PaymentType;
    constructor(public paymentTypeService: PaymentTypeService,
                private routerActive: ActivatedRoute,
                private router: Router,
                private ss: SessionService) 
    {
        this.selectedPaymentType = new PaymentType({});
    }

    public getPaymentType(paymentTypeId : number)
    {
        if(paymentTypeId > 0)
        {    
            this.paymentTypeService.getPaymentTypeById(paymentTypeId).subscribe(p => {
            this.selectedPaymentType = p;
            let varPaymentTypeEnum = this.selectedPaymentType.PaymentTypeEnum;
            let varPaymentTypeEnumString = PaymentTypeEnum[varPaymentTypeEnum];
            this.cbPaymentTypeEnum.SelectedItem = varPaymentTypeEnumString;
            }); 
        }  
        else
        {
            this.selectedPaymentType = new PaymentType({
            })
        }
    }

    ngOnInit() 
    { 
        let options = Object.keys(PaymentTypeEnum);
        this.listPaymentTypeEnum = options.slice(options.length/2);
        this.cbPaymentTypeEnum.itemsSource = this.listPaymentTypeEnum;
        this.cbPaymentTypeEnum.populateSuggestions();
        this.routerActive.params.subscribe(params => {
        let id = params['PaymentTypeId'] as number;
        this.getPaymentType(id);
        });
    }

    public onSubmit() 
    {
        this.paymentTypeService.savePaymentType(this.selectedPaymentType).subscribe(
        p =>{this.router.navigateByUrl("/search-payment-type");});
    }

    public onPaymentTypeEnumChanged(valueEnum : string)
    {
        let parse = PaymentTypeEnum[valueEnum];
        this.selectedPaymentType.PaymentTypeEnum = parse;
    }
   
}