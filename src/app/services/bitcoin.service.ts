import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  getRate() {
    return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
  }
}
