import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjCoreModule } from '@grapecity/wijmo.angular2.core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxInFirstColumnComponent } from './checkbox-in-first-column/checkbox-in-first-column.component';
import { MultipleComponentsInCellsComponent } from './multiple-components-in-cells/multiple-components-in-cells.component';
import { DashboardComponent } from './dashboard.component';
import { InlineValidationComponent } from './inline-validation/inline-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CheckboxInFirstColumnComponent,
    MultipleComponentsInCellsComponent,
    InlineValidationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, WjCoreModule, WjGridModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
