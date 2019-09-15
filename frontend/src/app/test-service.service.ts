import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TestServiceService {

  baseurl = 'http://sandbox-env.szf8jd6mrs.eu-west-2.elasticbeanstalk.com/hello';
  constructor(private http: HttpClient) {
    console.log("Test service constructor");
   }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  TestGet():Observable<String>{
    console.log("testGet");
    return this.http.get(this.baseurl, {responseType: 'text'});
  }
}
