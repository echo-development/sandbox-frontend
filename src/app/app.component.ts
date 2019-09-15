import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Transaction } from './models/transaction';
import { TransactionService } from './services/transaction.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent {
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
    console.log('Amount is: ' + amount)
    /* this.transactionService.getTransactions(amount).subscribe((transactions: Transaction[]) => {
      this.dataSource = new MatTableDataSource(transactions);
    }); */
  }
}

const ELEMENT_DATA: Transaction[] = [
  { description: 'test', timestamp: 'Hydrogen', transactionCost: 1.0079 },
  { description: 'test', timestamp: 'Helium', transactionCost: 4.0026, },
  { description: 'test', timestamp: 'Lithium', transactionCost: 6.941, },
  { description: 'test', timestamp: 'Beryllium', transactionCost: 9.0122, },
  { description: 'test', timestamp: 'Boron', transactionCost: 10.811, },
  { description: 'test', timestamp: 'Carbon', transactionCost: 12.0107, },
  { description: 'test', timestamp: 'Nitrogen', transactionCost: 14.0067, },
  { description: 'test', timestamp: 'Oxygen', transactionCost: 15.9994, },
  { description: 'test', timestamp: 'Fluorine', transactionCost: 18.9984, },
  { description: 'test', timestamp: 'Neon', transactionCost: 20.1797, },
];