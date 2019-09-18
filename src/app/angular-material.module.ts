import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioButton, MatRadioModule} from "@angular/material/radio";

@NgModule({
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule
  ]
})

export class AngularMaterialModule {}
