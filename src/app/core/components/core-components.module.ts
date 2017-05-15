import { ComboBox, SearchBox } from './';
import {
  Header,
  Footer,
  ColumnBodyTemplateLoader,
  ColumnFooterTemplateLoader,
  ColumnHeaderTemplateLoader,
  TemplateWrapper,
  TemplateLoader,
  RowExpansionLoader
} from './shared/shared';
import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import {
  NgModule
} from '@angular/core';
import {
  Column
} from './shared/column';
import {
  CommonModule
} from '@angular/common';
import {
  DataGrid
} from './data-grid.component';
import { PrimeTemplate } from './shared/prime-template';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot()],
  exports: [DataGrid,
    Header,
    Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader,
     ColumnBodyTemplateLoader, ColumnFooterTemplateLoader,
      PrimeTemplate, TemplateLoader, RowExpansionLoader, ComboBox, SearchBox],
  declarations: [
    DataGrid,
    Header,
    Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader,
     ColumnBodyTemplateLoader, ColumnFooterTemplateLoader,
      PrimeTemplate, TemplateLoader, RowExpansionLoader, ComboBox, SearchBox
  ],
  providers: [],
})
export class CoreComponentsModule {}
