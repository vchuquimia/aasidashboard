import { Component, OnInit } from '@angular/core';
import { PaymentType, PaymentTypeEnum } from '../../../models/records/payment-type';
import { PaymentTypeService } from '../../../services/records/payment-type.service'; 

@Component({
    moduleId: module.id,
    selector: 'search-payment-type',
    templateUrl: 'search-payment-type.component.html'
})

export class SearchPaymentTypeComponent implements OnInit 
{
    public paymentTypes : Array<PaymentType>;
    public SelectedItem : PaymentType;
    constructor(public paymentTypeService: PaymentTypeService) { }

    public getAllPaymentType()
    {
        this.paymentTypeService.getPaymentType("%").subscribe(p => {this.paymentTypes = p});
    }

    ngOnInit() 
    { 
        this.getAllPaymentType();
    }

    public getPaymentTypeEnum(objPaymentType : PaymentType)
    {
        return PaymentTypeEnum[objPaymentType.PaymentTypeEnum];
    }

    public onSearchPaymentTypeChanged(objPaymentType : PaymentType)
    {
        
    }

    public deletePaymentType(paymentTypeId: number)
    {
        this.paymentTypeService.deletePaymentType(paymentTypeId).subscribe(
            p => { this.getAllPaymentType(); }
        );
    }
}