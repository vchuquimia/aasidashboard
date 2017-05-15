export class Pager{
    RowsByPage:number;
    PageIndex: number;
    TotalRows:number;
    LoadedRows:number;
    constructor(){
        this.RowsByPage = 10;
        this.PageIndex = 0;
    }
}