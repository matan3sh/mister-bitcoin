import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { Router } from '@angular/router';

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
    private bitcoinService: BitcoinService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (!user) return this.router.navigateByUrl('/signup');
      else this.user = user;
    });
    this.bitcoinService.getRate().subscribe((rate) => (this.rate = rate));
  }

  get usd() {
    if (this.rate) return (this.user.coins / this.rate).toFixed(3);
    return undefined;
  }
}
