import { StandardJournalDescriptionService } from '../../services/records/standard-journal-description.service';
// import { MyDatePickerConfigService } from '../../services/my-date-picker/my-date-picker-config.service';
import { CurrencyService } from '../../services/records/currency.service';
// import { ExchangeRateService } from '../../services/records/exchange-rate.service';
import { OrganizationTypeService } from '../../services/records/organization-type.service';
import { PhoneTypeService } from '../../services/records/phone-type.service';

import { SearchDistributionCodeComponent } from './distribution-code/search-distribution-code.component';
import { DistributionCodeService } from '../../services/records/distribution-code.service';
import { DistributionCodeComponent } from './distribution-code/distribution-code.component';
import { LegalEntityService } from '../../services/records/legal-entity.service';
import { AreaService } from '../.././services/records/area.service';
import { BankService } from '../.././services/records/bank.service';
import { PaymentTypeService } from '../.././services/records/payment-type.service';
import { ClasificationCodeService } from '../.././services/records/clasification-code.service';
import { ExchangeAdjustmentAccountingConfigService } from '../.././services/records/exchange-adjustment-accounting-config.service';
import {SubAccountTypeService} from '../.././services/records/sub-account-type.service';
//import { FuncLiteService } from '../.././services/records/func-lite.service';
import { DistrictService } from '../.././services/records/district.service';
import { BankInfoTypeService } from '../.././services/records/bank-info-type.service';
import { StudentDegreeService} from '../../services/records/student-degree.service'
import { StudentDegreeComponent} from '../../modules/records/student-degree/student-degree.component'
import { ChartOfAccountsService} from '../../services/records/chart-of-accounts.service'
import { ChartOfAccountComponent} from '../../modules/records/chart-of-accounts/chart-of-accounts.component'
import { ChartOfFundsService} from '../../services/records/chart-of-funds.service';
import { ChartOfFundsComponent} from '../../modules/records/chart-of-funds/chart-of-funds.component';
import { JournalTypeService } from '../.././services/records/journal-type.service';
import { JournalTypeGroupItemService } from '../.././services/records/journal-type-group-item.service';

import { JournalTypeGroupService} from '../../services/records/journal-type-group.service';
import { DenominationalEntityService } from '../.././services/records/denominational-entity.service';
import {
  RECORDS_COMPONENTS,
  RECORDS_ROUTING
} from './records.routing';
import {
  CoreComponentsModule
} from '../../core/components/core-components.module';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import {
  CommonModule
} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchAccountComponent } from './account-maintenance/search-account.component';

// import { SearchBox } from '../.././core/components/search-box.component';
// import { ComboBox } from '../.././core/components/combo-box.component';

export const RECORDS_PROVIDERS = [
  LegalEntityService,
  DistributionCodeService,
  SubAccountTypeService,
 // FuncLiteService,
  DistributionCodeService,
  AreaService,  
  DistrictService,
  JournalTypeService,
  ClasificationCodeService,
  ChartOfAccountsService,
  ChartOfFundsService,
  CurrencyService,
  DenominationalEntityService,
  // BankInfoTypeService,
  // BankInfoTypeService,
  BankInfoTypeService,
  StudentDegreeService,
  PhoneTypeService,
  OrganizationTypeService,
  CurrencyService,
    DenominationalEntityService,
    JournalTypeGroupService,
    JournalTypeGroupItemService,
    BankService,
    PaymentTypeService ,
  // ExchangeRateService,
  // MyDatePickerConfigService,
  StandardJournalDescriptionService
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreComponentsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RECORDS_ROUTING
  ],
  exports: [],
  declarations: [
    RECORDS_COMPONENTS,
    // ComboBox, SearchBox,
    DistributionCodeComponent,
    SearchDistributionCodeComponent,
  ],
  providers: [
    RECORDS_PROVIDERS

  ],
})
export class RecordsModule { }  
