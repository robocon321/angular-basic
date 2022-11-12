import { AuthService } from './services/auth.service';
import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: 'root'})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.isLogin = authService.isLogin;
  }

  isLogin: boolean;

  logout() {
    this.authService.logout();
    this.isLogin = this.authService.isLogin;
  }

  login() {
    this.authService.login();
    this.isLogin = this.authService.isLogin;
  }

} 
