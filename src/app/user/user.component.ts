import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // devo dire che questa variabile riceve dati dall esterno, cioe dal suo elemento padre ovvero l app
  @Input('user-data') user: User;
  // se faccio cancellare l elemento direttamente dal componente padre, metto in output verso il suo elemento padre degli eventi
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onUserSelected = new EventEmitter();

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  deleteUser() {
    // cosi se ascolto l evento nel padre
    this.userDeleted.emit(this.user);


    // cosi se ascolto l evento nel figlio
    this.userService.deleteUser(this.user);
  }
  updateUser() {
    this.onUserSelected.emit(this.user)
  }

}
