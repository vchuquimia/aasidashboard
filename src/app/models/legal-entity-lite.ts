export class LegalEntityLite
{
    Id:number;
    Code:string;
    Name:string;

	constructor(legalEntityInfo:any) {
        this.Id =  legalEntityInfo.Id;
        this.Code = legalEntityInfo.Code;
        this.Name = legalEntityInfo.Name;
	}
    
}