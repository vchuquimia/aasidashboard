export class DistributionCode
{
    public Id: number;
    public DistributionCode: string;
    public Description: string;
    public IRSTypeEnum: number;

    constructor(dc: any) {
        this.Id = dc.Id;
        this.DistributionCode = dc.DistributionCode;
        this.Description = dc.Description;
        this.IRSTypeEnum = dc.IRSTypeEnum;
    }
}