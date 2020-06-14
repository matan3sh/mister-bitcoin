import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css'],
})
export class TransferFundComponent {
  @Input() contact;
  amount: number;

  @Output('addMove') moveEmitter = new EventEmitter();

  constructor(private router: Router) {}

  addMove() {
    this.moveEmitter.emit(this.amount);
    this.router.navigateByUrl('/');
  }
}
