export class RestrictionLite
{
    Id : number;
    Code : string;
    Name : string;
    AcceptEntries : boolean; 

	constructor(param:any) 
    {
        this.Id =  param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.AcceptEntries = param.AcceptEntries;
	}
}