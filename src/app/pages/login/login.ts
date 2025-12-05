import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {

  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (!email || !password) {
      alert('Please enter username and password');
      return;
    }

    this.router.navigate(['/board']);
  }
}
