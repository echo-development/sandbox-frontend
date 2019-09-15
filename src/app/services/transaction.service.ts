import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseurl = 'http://sandbox-env.szf8jd6mrs.eu-west-2.elasticbeanstalk.com/transactions';
  private amountParam = '?amount=';
  constructor(private http: HttpClient) {
    console.log("Test service constructor");
   }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getTransactions(amount: number):Observable<Transaction[]>{
    console.log("testGet");

    return this.http.get<Transaction[]>(this.baseurl + this.amountParam + amount);
  }
}
