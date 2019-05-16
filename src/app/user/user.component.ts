import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // devo dire che questa variabile riceve dati dall esterno
  @Input('user-data') user
  @Output('onDeleteUser') userDeleted = new EventEmitter();

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  deleteUser() {

    // cosi se ascolto l evento nel padre
    this.userDeleted.emit(this.user);


    // cosi se ascolto l evento nel figlio
    // this.userService.deleteUser(this.user);
  }

}
