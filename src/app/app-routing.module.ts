import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from './error/error.component';
import {RouterModule, Routes} from '@angular/router';
import {PlaygroundComponent} from './playground/playground.component';
import {AppComponent} from './app.component';
import {TransactionComponent} from './transaction/transaction.component';

const routes: Routes = [
  {path: 'playground', component: PlaygroundComponent },
  {path: 'transaction', component: TransactionComponent}
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
