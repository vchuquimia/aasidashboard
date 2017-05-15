export class ChartOfFunds
{
    Code:string;
    Name:string;
    Id:number;    
    constructor(param:any) {
        this.Code = param.Code;
        this.Name = param.Name;        
        this.Id=param.Id;        
	}
}