import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any = {};
  rate: any;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => (this.user = user));
    this.bitcoinService.getRate().subscribe((rate) => (this.rate = rate));
    console.log(this.user);
  }

  get usd() {
    if (this.rate) return (this.user.coins / this.rate).toFixed(3);
    return undefined;
  }
}
