import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  loadFromStorage(key) {
    const json = localStorage.getItem(key);
    const value = JSON.parse(json);
    return of(value);
  }

  saveToStorage(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
    return of();
  }
}
