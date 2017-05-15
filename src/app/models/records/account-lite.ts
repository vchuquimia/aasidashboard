import { SubAccountType } from './sub-account-type';
export class AccountLite
{
    Id:number;
    Code:string;
    Name:string;
    SubAccountType : SubAccountType; 

	constructor(param:any) {
        this.Id =  param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.SubAccountType = param.SubAccountType;
	}
    
}