import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TransactionService} from '../services/transaction.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Transaction} from '../models/transaction';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  displayedColumns: string[] = ['description', 'timestamp', 'transactionCost'];
  dataSource;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      amount: [0]
    });
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.transactionService.getTransactions(10).subscribe((transactions: Transaction[]) => {
      this.dataSource = new MatTableDataSource(transactions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  getTransactions(amount: number) {
    console.log('Amount is: ' + amount);
    /* this.transactionService.getTransactions(amount).subscribe((transactions: Transaction[]) => {
      this.dataSource = new MatTableDataSource(transactions);
    }); */
  }



}
