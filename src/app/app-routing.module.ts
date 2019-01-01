import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CustomerComponent} from './customer/customer.component';
import {ImportBillComponent} from './import-bill/import-bill.component';
import {ExportBillComponent} from './export-bill/export-bill.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'import-bill',
    component: ImportBillComponent
  },
  {
    path: 'export-bill',
    component: ExportBillComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
