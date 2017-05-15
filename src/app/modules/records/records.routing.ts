import {
    SearchStandardJournalDescriptionComponent
} from './standard-journal-description/search-standard-journal-description.component';
import {
    StandardJournalDescriptionComponent
} from './standard-journal-description/standard-journal-description.component';
// import { MyDatePicker } from '../my-date-picker/my-date-picker.component';
// import { SearchExchangeRateComponent } from './exchange-rate/search-exchange-rate.component';
// import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { SearchOrganizationTypeComponent } from './organization-type/search-organization-type.component';
import { OrganizationTypeComponent } from './organization-type/organization-type.component';
import { SearchPhoneTypeComponent } from './phone-type/search-phone-type.component';
import { PhoneTypeComponent } from './phone-type/phone-type.component';
import { SearchDistributionCodeComponent } from './distribution-code/search-distribution-code.component';
import { DistributionCodeComponent } from './distribution-code/distribution-code.component';
import { ClasificationCodeComponent } from './clasification-code/clasification-code.component';
import { SearchClasificationCodeComponent } from './clasification-code/search-clasification-code.component';
import { SearchSubAccountTypeComponent } from './sub-account-type/search-sub-account-type.component';
import { SubAccountTypeComponent } from './sub-account-type/sub-account-type.component';
import { CanActivateViaEntitySelectionGuard } from "app/common/guards/can-activate-via-entity-selection.guard";
import { ExchangeAdjustmentAccountingConfigComponent } from './exchange-adjustment-accounting-config/exchange-adjustment-accounting-config.component';
import { SearchExchangeAdjustmentAccountingConfigComponent } from './exchange-adjustment-accounting-config/search-exchange-adjustment-accounting-config.component';

import { BankInfoTypeComponent} from './bank-info-type/bank-info-type.component';
import { SearchBankInfoTypeComponent} from './bank-info-type/search-bank-info-type.component';
import { JournalTypeComponent } from './journal-type/journal-type.component';
import { SearchJournalTypeComponent} from './journal-type/search-journal-type.component';
import { CurrencyComponent } from './currency/currency.component';
import { SearchCurrencyComponent} from './currency/search-currency.component';
import { DenominationalEntityComponent } from './denominational-entity/denominational-entity.component';
import { SearchDenominationalEntityComponent} from './denominational-entity/search-denominational-entity.component';
import { JournalTypeGroupComponent} from './journal-type-group/journal-type-group.component';
import { SearchJournalTypeGroupComponent} from './journal-type-group/search-journal-type-group.component';
// import { SearchFunctionMaintenanceComponent } from './function-maintenance/search-function-maintenance.component';
// import { FunctionMaintenanceComponent } from './function-maintenance/function-maintenance.component';
import {
  SearchAccountComponent
} from './account-maintenance/search-account.component';
import {
  AuthGuard
} from '../../common/guards/auth.guard';
import {
  AreaComponent
} from './area/area.component';
import {
  SearchAreaComponent
} from './area/search-area.component';
import { BankComponent } from './bank/bank.component';
import { SearchBankComponent } from './bank/search-bank.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { SearchPaymentTypeComponent } from './payment-type/search-payment-type.component';
import {
  Routes,
  RouterModule,
  RouterStateSnapshot
} from '@angular/router';

import {
  EntitySelectionComponent
} from './legal-entity/entity-selection.component';
import { StudentDegreeComponent} from './../records/student-degree/student-degree.component';
import { SearchStudentDegreeComponent } from './../records/student-degree/search-student-degree.component';

import {
  DistrictComponent
} from './district/district.component';

import {
  SearchDistrictComponent
} from './district/search-district.component';
import { ChartOfAccountComponent} from './../records/chart-of-accounts/chart-of-accounts.component';
import { SearchChartOfAccountsComponent } from './../records/chart-of-accounts/search-chart-of-accounts.component';
import { ChartOfFundsComponent } from "app/modules/records/chart-of-funds/chart-of-funds.component";
import { SearchChartOfFundsComponent } from "app/modules/records/chart-of-funds/search-chart-of-funds.component";
// import {
//   BankInfoTypeComponent
// } from './bank-info-type/bank-info-type.component';

// import {
//   SearchBankInfoTypeComponent
// } from './bank-info-type/search-bank-info-type.component';
 

const appRoutes: Routes = [

  {
    path: 'entity-selection',
    component: EntitySelectionComponent,
    canActivate: [AuthGuard]
  },
      { path: '', redirectTo: 'entity-selection', pathMatch: 'full' },
      { path: 'search-account', component: SearchAccountComponent },
      { path: 'search-district', component: SearchDistrictComponent },
      { path: 'district/:Id', component: DistrictComponent },
      { path: 'search-distribution-code', component: SearchDistributionCodeComponent },
      { path: 'distribution-code/:Id', component: DistributionCodeComponent },
      { path: 'search-area', component: SearchAreaComponent },
      { path: 'area/:AreaId', component: AreaComponent },
      { path: 'search-bank', component: SearchBankComponent },
      { path: 'bank/:BankId', component: BankComponent },
      { path: 'payment-type/:PaymentTypeId', component: PaymentTypeComponent },
      { path: 'search-payment-type', component: SearchPaymentTypeComponent },
      { path: 'clasification-code/:ccId', component: ClasificationCodeComponent },
      { path: 'search-clasification-code', component: SearchClasificationCodeComponent },
      { path: 'sub-account-type/:satId', component: SubAccountTypeComponent },
      { path: 'search-sub-account-type', component: SearchSubAccountTypeComponent },
      { path: 'area/:AreaId', component: AreaComponent },
      { path: 'search-bank-info-type', component: SearchBankInfoTypeComponent },
      { path: 'bank-info-type/:Id', component: BankInfoTypeComponent },
      { path: 'student-degree/:sdId', component: StudentDegreeComponent },
      { path: 'search-student-degree/', component: SearchStudentDegreeComponent},
      { path: 'journal-type/:Id', component: JournalTypeComponent},
      { path: 'search-journal-type', component: SearchJournalTypeComponent}, 
      {path: 'phone-type/:phoneTypeId', component: PhoneTypeComponent},
      {path: 'search-phone-type', component: SearchPhoneTypeComponent},
      {path: 'organization-type/:orgTypeId', component: OrganizationTypeComponent},
      {path: 'search-organization-type', component: SearchOrganizationTypeComponent},
      // {path: 'exchange-rate/:exchangeRateId', component: ExchangeRateComponent},
      // {path: 'search-exchange-rate', component: SearchExchangeRateComponent},
      { path: 'chart-of-accounts/:coId', component: ChartOfAccountComponent },
      { path: 'search-chart-of-accounts', component: SearchChartOfAccountsComponent},
      { path: 'chart-of-funds/:sdId', component: ChartOfFundsComponent },
      { path: 'search-chart-of-funds', component: SearchChartOfFundsComponent},
      { path: 'currency/:Id', component: CurrencyComponent },
      { path: 'search-currency', component: SearchCurrencyComponent},
      { path: 'denominational-entity/:Id', component: DenominationalEntityComponent },
      { path: 'search-denominational-entity', component: SearchDenominationalEntityComponent},
      // { path: 'my-date-picker', component: MyDatePicker},
      // { path: 'function-maintenance/:funcId', component: FunctionMaintenanceComponent },
      // // { path: 'search-function-maintenance', component: SearchFunctionMaintenanceComponent }
      { path: 'exchange-adjustment-accounting-config', component: ExchangeAdjustmentAccountingConfigComponent },
      { path: 'search-exchange-adjustment-accounting-config', component: SearchExchangeAdjustmentAccountingConfigComponent },
      { path: 'journal-type-group/:JournalTypeGroupId', component: JournalTypeGroupComponent },
      { path: 'search-journal-type-group', component: SearchJournalTypeGroupComponent },
      { path: 'standard-journal-description/:standardDescriptionId', component: StandardJournalDescriptionComponent },
      { path: 'search-standard-journal-description', component: SearchStandardJournalDescriptionComponent }
    //   { path: 'new-path', component: newComponent },

];

export const RECORDS_ROUTING = RouterModule.forChild(appRoutes);

export const RECORDS_COMPONENTS = [
  EntitySelectionComponent,
  SearchAccountComponent,
  AreaComponent,
  SearchBankComponent,
  BankComponent,
  SearchAreaComponent,
  PaymentTypeComponent,
  SearchPaymentTypeComponent,
  DistributionCodeComponent,
  DistrictComponent,
  SearchDistrictComponent,
  BankInfoTypeComponent,
  SearchBankInfoTypeComponent,
  SearchDistributionCodeComponent,
  ClasificationCodeComponent,
  SearchClasificationCodeComponent,
  SubAccountTypeComponent,
  SearchSubAccountTypeComponent,
  StudentDegreeComponent,
  SearchStudentDegreeComponent,
  JournalTypeComponent,
  SearchJournalTypeComponent,  
  PhoneTypeComponent,
  SearchPhoneTypeComponent,
  OrganizationTypeComponent,
  SearchOrganizationTypeComponent,
  // ExchangeRateComponent,
  // SearchExchangeRateComponent,
  ChartOfAccountComponent,
  SearchChartOfAccountsComponent,
  SearchChartOfFundsComponent,
  ChartOfFundsComponent,
  CurrencyComponent,
  SearchCurrencyComponent,
  DenominationalEntityComponent,
  SearchDenominationalEntityComponent,
  // MyDatePicker,
  // FunctionMaintenanceComponent,
  // SearchFunctionMaintenanceComponent

    ExchangeAdjustmentAccountingConfigComponent,
    SearchExchangeAdjustmentAccountingConfigComponent,
    JournalTypeGroupComponent,
    SearchJournalTypeGroupComponent,
    StandardJournalDescriptionComponent,
    SearchStandardJournalDescriptionComponent

];
