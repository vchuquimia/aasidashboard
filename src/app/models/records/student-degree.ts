export class StudentDegree
{
    Code:string;
    Name:string;
    Id:number;
    RegionCode:string;
    constructor(param:any) {
        this.Code = param.Code;
        this.Name = param.Name;        
        this.Id=param.Id;
        this.RegionCode=param.RegionCode;
	}
}