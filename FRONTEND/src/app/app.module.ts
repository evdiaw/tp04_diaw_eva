import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { OnlyLettersDirective } from './only-letters.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { TelephonePipe } from './telephone.pipe';
import { CompCatalogueComponent } from './comp-catalogue/comp-catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component:LoginComponent},
  { path: 'creation_compte', component: Comp1Component },
  { path: 'catalogue', component: CompCatalogueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    OnlyLettersDirective,
    OnlyNumbersDirective,
    TelephonePipe,
    CompCatalogueComponent,
    SearchBarComponent,
    MenuComponent,
    AccueilComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
