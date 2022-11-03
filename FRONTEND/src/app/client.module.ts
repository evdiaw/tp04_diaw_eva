import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'creation_compte', component: Comp1Component },
];


@NgModule({
  declarations: [
    LoginComponent,
    Comp1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ClientModule,
  ]
})
export class ClientModule { }
