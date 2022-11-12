import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  
  constructor() { }

  isAuthenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => resolve(this.isLogin), 500)
    });
    return promise
  }

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false
  }

}
