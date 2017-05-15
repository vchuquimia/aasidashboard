export class SubAccountType
{
    Id:number;
    Code:string;
    Name:string;
    SubAccountTypeEnum:number;
    IsCheckAllowed: boolean;
    IsReceiptAllowed:boolean;
    IsWireTransferAllowed:boolean;
    IsEligibleFor1099:boolean;
    HasAddress:boolean;
    IsEligibleGroup:boolean;


    

	constructor(param:any) {
        this.Id =  param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.SubAccountTypeEnum = param.SubAccountTypeEnum;
        this.IsCheckAllowed = param.IsCheckAllowed;
        this.IsReceiptAllowed = param.IsReceiptAllowed;
        this.IsWireTransferAllowed = param.IsWireTransferAllowed;
        this.IsEligibleFor1099 = param.IsEligibleFor1099;
        this.HasAddress = param.HasAddress;
        this.IsEligibleGroup = param.IsEligibleGroup;
	}   
    
}
