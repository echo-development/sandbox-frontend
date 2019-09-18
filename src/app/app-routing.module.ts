import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlaygroundComponent} from './playground/playground.component';
import {TransactionComponent} from './transaction/transaction.component';
import {NotificationComponent} from "./notification/notification.component";

const routes: Routes = [
  {path: 'Playground', component: PlaygroundComponent },
  {path: 'Transaction', component: TransactionComponent},
  {path: 'Notification', component: NotificationComponent},
  {path: '', redirectTo: 'Playground', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule { }
