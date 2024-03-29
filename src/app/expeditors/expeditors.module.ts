import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpeditorsComponent } from './expeditors.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsComponent } from './payments/payments.component';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: ExpeditorsComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }
  ,
  {
    path: 'invoices',
    component: InvoicesComponent
  }
  ,
  {
    path: 'payment',
    component: PaymentComponent
  }
  ,
  {
    path: 'payments',
    component: PaymentsComponent
  }
];

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ExpeditorsComponent, CustomersComponent, InvoicesComponent, PaymentComponent, PaymentsComponent, PasswordComponent]
})
export class ExpeditorsModule { }

