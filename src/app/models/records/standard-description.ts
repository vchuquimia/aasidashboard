export class StandardDescription
{
    Id: number;
    Code: string;
    Name: string;
    DisableDefaultMemo: boolean;
    LegalEntityId: number;
    constructor(param:any)
    {
        this.Id = param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.DisableDefaultMemo = param.DisableDefaultMemo;
        this.LegalEntityId = param.LegalEntityId;
    }
}