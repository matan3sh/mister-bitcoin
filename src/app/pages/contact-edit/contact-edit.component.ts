import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  contact: any = {};

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params.id)
        return (this.contact = this.contactService.getEmptyContact());
      this.contactService.getContactById(params.id).subscribe((contact) => {
        this.contact = contact;
      });
    });
  }

  goBack() {
    this.location.back();
  }

  removeContact() {
    this.contactService
      .removeContact(this.contact._id)
      .subscribe(() => this.router.navigateByUrl('/contact'));
  }

  saveContact() {
    this.contactService
      .saveContact(this.contact)
      .subscribe((contact) => this.goBack());
  }
}
