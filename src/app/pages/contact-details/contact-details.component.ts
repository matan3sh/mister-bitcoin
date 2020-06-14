import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact: any = {};
  user: any = {};

  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contactService
        .getContactById(params.id)
        .subscribe((contact) => (this.contact = contact));
    });
    this.userService.getUser().subscribe((user) => (this.user = user));
  }

  goBack() {
    this.location.back();
  }
}
