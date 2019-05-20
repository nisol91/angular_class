import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: User;
  private __user: User;
@Input() set user(user: User) {
  this.__user = user;
  this.userCopy = Object.assign({},user);
};
get user() {
  return this.__user;
}
//se metto private, automaticamente mi istanzia UsersService
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  saveUser() {
    alert(this.user.id);
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }
  resetForm() {
    if (this.user.id == 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }

}
