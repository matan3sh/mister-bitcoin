import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts() {
    return of(contacts);
  }

  getContactById(id) {
    const contact = contacts.find((contact) => contact._id === id);
    return of(contact);
  }

  removeContact(id) {
    const idx = contacts.findIndex((contact) => contact._id === id);
    if (idx !== -1) contacts.splice(idx, 1);
    return of(contacts);
  }

  getEmptyContact() {
    return of({
      name: '',
      email: '',
      phone: '',
    });
  }

  saveContact(contact) {
    return contact._id
      ? this._updateContact(contact)
      : this._addContact(contact);
  }

  _updateContact(contact) {
    const index = contacts.findIndex((c) => contact._id === c._id);
    if (index !== -1) {
      contacts[index] = contact;
    }
    return of(contact);
  }

  _addContact(contact) {
    contact._id = _makeId();
    const gender = Math.random() > 0.5 ? 'men' : 'women';
    contact.img = `https://randomuser.me/api/portraits/${gender}/${
      contacts.length + 1
    }.jpg`;
    contacts.push(contact);
    return of(contact);
  }
}

function _makeId(length = 10) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

const contacts = [
  {
    _id: '5a56640269f443a5d64b32ca',
    name: 'Ochoa Hyde',
    email: 'ochoahyde@renovize.com',
    phone: '+1 (968) 593-3824',
    img: 'https://i.ya-webdesign.com/images/avatar-png-1.png',
  },
  {
    _id: '5a5664025f6ae9aa24a99fde',
    name: 'Hallie Mclean',
    email: 'halliemclean@renovize.com',
    phone: '+1 (948) 464-2888',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTcNrQj4LRFsJxyOv_L8ovgODPO9wueTQUdMHzzhCrKX5muE8w&usqp=CAU',
  },
  {
    _id: '5a56640252d6acddd183d319',
    name: 'Parsons Norris',
    email: 'parsonsnorris@renovize.com',
    phone: '+1 (958) 502-3495',
    img: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png',
  },
];
