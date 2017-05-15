export class PaymentType
{
    Id : number;
    Code : string;
    Name : string;
    DefaultDescription : string;
    PaymentTypeEnum : number;
    IsDefault : boolean;
    
    constructor(param:any)
    {
        this.Id = param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.DefaultDescription = param.DefaultDescription;
        this.PaymentTypeEnum = param.PaymentTypeEnum;
        this.IsDefault = param.IsDefault;
    }
}

export enum PaymentTypeEnum
{
    Cash = 1,
    Check = 2,
    MoneyOrder = 3,
    CreditCard = 4,
    DirectDeposit = 5,
    WireTransfer = 6,
    Transfer = 7,
    DebitCard = 8
}
