import { FundLite } from './fund-lite'; 
import { AccountLite } from './account-lite';
import { FuncLite } from './func-lite';
import { RestrictionLite } from './restriction-lite';
import { LegalEntityAccountPeriodLite } from './legal-entity-account-period-lite';

export class ExchangeAdjustmentAccountingConfig
{
    Id : number;
    FundSource : FundLite;
    AccountCredit : AccountLite;
    FundCredit : FundLite;
    FunctionCredit :FuncLite;
    RestrictionCredit : RestrictionLite;
    AccountDebit : AccountLite;
    FundDebit : FundLite;
    FunctionDebit : FuncLite;
    RestrictionDebit : RestrictionLite;
    LegalEntityAccountPeriod : LegalEntityAccountPeriodLite;

    constructor(param:any)
    {
        this.Id = param.Id;
        this.FundSource = param.FundSource;
        this.AccountCredit = param.AccountCredit;
        this.FundCredit = param.FundCredit;
        this.FunctionCredit = param.FunctionCredit;
        this.RestrictionCredit = param.RestrictionCredit;
        this.AccountDebit = param.AccountDebit;
        this.FundDebit = param.FundDebit;
        this.FunctionDebit = param.FunctionDebit;
        this.RestrictionDebit = param.RestrictionDebit;
        this.LegalEntityAccountPeriod = param.LegalEntityAccountPeriod;
    }
}
