import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitModule } from './produit.module';
import { ClientModule } from './client.module';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'client', loadChildren: () => import('./client.module').then(m => m.ClientModule) },
  { path: 'produit', loadChildren: () => import('./produit.module').then(m => m.ProduitModule) },


];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ProduitModule,
    ClientModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
