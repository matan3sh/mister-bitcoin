import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { of } from 'rxjs';

const KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any = null;

  constructor(private storageService: StorageService) {}

  getUser() {
    if (!this.user) {
      this.storageService
        .loadFromStorage(KEY)
        .subscribe((user) => (this.user = user));
    }
    return of(this.user);
  }
}
