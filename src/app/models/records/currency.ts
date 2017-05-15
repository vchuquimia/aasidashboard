export class Currency{
    Id: number;
    Code: string;
    Name: string;
    Symbol: string;

    constructor(param:any){
        this.Id = param.Id;
        this.Code = param.Code;
        this.Name = param.Name;
        this.Symbol = param.Symbol;
    }
}