export class Bank
{
    Id:number;
    Code:string;
    Name:string;
    CheckAccountStartPos?:number;
    CheckAccountLength?:number;
    constructor(param:any) {
        this.Id =  param.Id;
        this.Code = param.Code;
        this.Name = param.Description;
        this.CheckAccountStartPos = param.CheckAccountStartPos;
        this.CheckAccountLength = param.CheckAccountLength;
	}
}
