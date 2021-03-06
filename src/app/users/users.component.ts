import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../classes/user';

// questo è il decoratore, che mi decora la classe Users. Sotto gli passo un oggetto di configurazione
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})


export class UsersComponent implements OnInit{
  @Output() updateUser = new EventEmitter<User>();
  title = 'Users';
  users = [];
  // un servizio è un tramite con il db
  // invece che istanziare la classe servizio (let service =...), uso la dependency injection
  // va pero aggiunta ai providers la mia classe servizio. Inietto user service in questa classe.
  constructor (private service: UsersService) {
    // let service = new UsersService();

    // qui sto andando a dire che la proprietà users di questa classe, me la ritorna il metodo getUsers
    // della classe servizio
  }

  // grazie a questa interfaccia, io inizializzo solo il servizio con il costruttore,
  // poi tutti i metodi del servizio vengono chiamati solo quando il
  // componente è pronto, ovvero OnInit.
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users = this.service.getUsers();

  }
  onDeleteUser(user) {
    this.service.deleteUser(user);
  }
  onSelectUser(user: User) {
    // alert(user.name);
    // lavoro su una copia cosi non mi va a variare i valori nella
    // tabella mentre li modifico, visto che i forms sono bindati alla tabella
    const userCopy = Object.assign({}, user);
    // emetto verso il padre questo evento (il padre è l app)
    this.updateUser.emit(userCopy);

  }
}
