import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';

  login() {
    // Implement login logic here
    console.log('Logged in as:', this.username);
  }

}
