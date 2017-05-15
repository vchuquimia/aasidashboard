export class SubAccountTransaction
{
    Id:number;
    Code:string;
    Name:string;
    SubAccountTypeDefinitionId :number; 

	constructor(param:any) {
        this.Id =  param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.SubAccountTypeDefinitionId = param.SubAccountTypeDefinitionId;
	}
    
}