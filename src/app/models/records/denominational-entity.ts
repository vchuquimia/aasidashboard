export class DenominationalEntity{
    Id: number;
    Code: string;
    Name: string;

    constructor(param:any){
        this.Id = param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
    }
}