export class LegalEntityAccountPeriodLite
{
    Id : number;
    Description : string;
    CloseDate? : Date;
    YearendProcedureDate? : Date;
    BeginDate : Date;
    EndDate : Date;
    LegalEntityId : number;

	constructor(param:any) 
    {
        this.Id =  param.Id;
        this.Description = param.Description;
        this.CloseDate = param.CloseDate;
        this.YearendProcedureDate = param.YearendProcedureDate;
        this.BeginDate = param.BeginDate;
        this.EndDate = param.EndDate;
        this.LegalEntityId = param.LegalEntityId;
	}
}   