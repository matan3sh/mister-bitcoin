import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.css'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact;

  constructor() {}

  ngOnInit() {}
}
