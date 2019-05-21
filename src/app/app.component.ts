import { Component } from '@angular/core';
import { User } from './classes/user';
//per l internazionalizzazione
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);

//fontawesome


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users management system';
  money = 4500.5;
  date = new Date();
  showForm: boolean = false;
  userSelected: User = new User();
  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }
  newUser() {
    this.showForm = true;
    this.userSelected = new User();
  }
  closeForm() {
    this.showForm = false;
  }
}
