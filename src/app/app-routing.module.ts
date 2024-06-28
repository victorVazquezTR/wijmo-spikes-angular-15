import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckboxInFirstColumnComponent } from './checkbox-in-first-column/checkbox-in-first-column.component';
import { MultipleComponentsInCellsComponent } from './multiple-components-in-cells/multiple-components-in-cells.component';
import { DashboardComponent } from './dashboard.component';
import { InlineValidationComponent } from './inline-validation/inline-validation.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'checkbox-in-first-column', component: CheckboxInFirstColumnComponent},
  {path: 'multiple-components-in-cells', component: MultipleComponentsInCellsComponent},
  {path: 'inline-validation', component: InlineValidationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
