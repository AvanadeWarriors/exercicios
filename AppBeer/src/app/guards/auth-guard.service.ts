import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private isAuthenticated = true;

  constructor() { }

  canActivate() {
    return this.isAuthenticated;
  }

  login() {
    return this.isAuthenticated = !this.isAuthenticated;
  }

}
