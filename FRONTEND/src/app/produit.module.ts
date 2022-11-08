import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompCatalogueComponent } from './comp-catalogue/comp-catalogue.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';

const appRoutes: Routes = [
  { path: 'catalogue', component:CompCatalogueComponent},
];

@NgModule({
  declarations: [
    CompCatalogueComponent,
    SearchBarComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class ProduitModule { }
