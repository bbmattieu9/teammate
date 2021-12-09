import { Injectable } from '@angular/core';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private _util: UtilService) { }



  saveToken(token: string) {
    localStorage.setItem('$app-specific-token-name', token);
  }

  getToken() {
    return localStorage.getItem('$app-specific-token-name');
  }

  removeToken() {
    localStorage.removeItem('$app-specific-token-name');
  }

  // setLocalObject(key: string, value: any) {
  //   localStorage.setItem(key, this._util.encrypt(JSON.stringify(value)));
  // }

  // getLocalObject(key: string): string {
  //   return JSON.parse(this._util.decrypt(localStorage.getItem(key)));
  // }
}
