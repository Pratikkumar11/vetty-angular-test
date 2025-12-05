import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(email: string, password: string): void {
    // simple dummy logic – accept any non-empty email+password
    if (email && password) {
      this.router.navigate(['/board']);
    } else {
      alert('Please enter email and password');
    }
  }
}
