export class Area
{
    Id:number;
    Code:string;
    Description:string;
    WorkingCapital?:number;
    HasStandardFunction:boolean;
    OrganizationLevelEnum:number;
    constructor(param:any) {
        this.Id =  param.Id;
        this.Code = param.Code;
        this.Description = param.Description;
        this.WorkingCapital = param.WorkingCapital;
        this.HasStandardFunction = param.HasStandardFunction;
        this.OrganizationLevelEnum = param.OrganizationLevelEnum;
	}
}


export enum OrganizationLevelEnum
{
    GeneralConference = 0,
    Division = 1,
    Union = 2,
    Conference = 3,
    Other = 4
}