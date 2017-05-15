export class ChartOfAccounts
{
    Id:number;
    Code:string;
    Name:string;
    AuxiliaryChartOfAccount:ChartOfAccounts;

	constructor(param:any) {
        this.Id =  param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.AuxiliaryChartOfAccount = param.AuxiliaryChartOfAccount;
	}
    
}