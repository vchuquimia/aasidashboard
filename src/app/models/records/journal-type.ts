export class JournalType{
    Id : number;
    Code: string;
    Description: string;
    IsTemplate : boolean;
    IsLegalBalance : boolean;
    IsAdjustedBalance : boolean;
    IsEditable : boolean;
    IsCalculated :boolean;
    IsScheduleRequired : boolean;
    IsLegalBalanceMultiCurrency : boolean;
    IsAdjustedBalanceMultiCurrency : boolean;
    IsCashFlowBalance : boolean;
    IsDatePastAllowed : boolean;
    IsAuditingAdjustment : boolean;
    IsCheckAllowed : boolean;
    IsReceiptAllowed : boolean;
    IsInvoiceAllowed : boolean;
    IsWireTransferAllowed : boolean;
    IsReceiptSchoolAllowed : boolean;
    IsARDownloadAllowed : boolean;
    IsAPDownloadAllowed : boolean;
    IsRecurringEntryAllowed : boolean;
    IsAttachmentsAllowed : boolean;
    IsAllocationAdjustment : boolean;
    IsBeginningBalance : boolean;
    IsClosingYear : boolean;

    constructor(param:any)
    {
        this.Id = param.Id;
        this.Code = param.Code;
        this.Description = param.Description;
        this.IsTemplate = param.IsTemplate;
        this.IsLegalBalance = param.IsLegalBalance;
        this.IsAdjustedBalance = param.IsAdjustedBalance;
        this.IsEditable = param.IsEditable;
        this.IsCalculated = param.IsCalculated;
        this.IsScheduleRequired = param.IsScheduleRequired;
        this.IsLegalBalanceMultiCurrency = param.IsLegalBalanceMultiCurrency;
        this.IsAdjustedBalanceMultiCurrency = param.IsAdjustedBalanceMultiCurrency;
        this.IsCashFlowBalance = param.IsCashFlowBalance;
        this.IsDatePastAllowed = param.IsDatePastAllowed;
        this.IsAuditingAdjustment = param.IsAuditingAdjustment;
        this.IsCheckAllowed = param.IsCheckAllowed;
        this.IsReceiptAllowed = param.IsReceiptAllowed;
        this.IsInvoiceAllowed = param.IsInvoiceAllowed;
        this.IsWireTransferAllowed = param.IsWireTransferAllowed;
        this.IsReceiptSchoolAllowed = param.IsReceiptSchoolAllowed;
        this.IsARDownloadAllowed = param.IsARDownloadAllowed;
        this.IsAPDownloadAllowed = param.IsAPDownloadAlloed;
        this.IsRecurringEntryAllowed = param.IsRecurringEntryAllowed;
        this.IsAttachmentsAllowed = param.IsAttachmentsAllowed;
        this.IsAllocationAdjustment = param.IsAllocationAdjustment;
        this.IsBeginningBalance = param.IsBeginningBalance;
        this.IsClosingYear = param.IsClosingYear;
    }
}