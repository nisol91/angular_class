import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

// questo è il decoratore, che mi decora la classe Users. Sotto gli passo un oggetto di configurazione
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})


export class UsersComponent implements OnInit{
  title = 'Users';
  users = [];
  // un servizio è un tramite con il db
  // invece che istanziare la classe servizio (let service =...), uso la dependency injection
  // va pero aggiunta ai providers la mia classe servizio.
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
}
