export class ClasificationCode
{
    public Id: number;
    public Code:string;
    public Name:string;
    public IsStandard:boolean;
    public IRSTypeEnum:number;

    constructor(param:any)
    {
        this.Id = param.Id;
        this.Code = param.Code;
        this.Name = param.Name
        this.IsStandard = param.IsStandard;
        this.IRSTypeEnum = param.IRSTypeEnum
    }
}

