import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getData() {
    return this.httpClient.get('http://localhost:3020/api/v1/accounts/1/transactions')
  }
  // login(data) {
  //   return this.httpClient.get('http://localhost:3000/api/v1/auth/login', data)
  // }
}
