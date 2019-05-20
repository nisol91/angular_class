import { User } from '../classes/user';
import { UserInterface } from '../interfaces/userinterface';

export class UsersService {
  users: Array<User> = [
    {
      id: 1,
      name: 'Nicola',
      lastname: 'Solzi',
      email: 'ns@mail.com',
      fiscalcode: 'ocn',
      province: 'pr',
      phone: '912192'
    },
    {
      id: 2,
      name: 'Nicola2',
      lastname: 'Solzi',
      email: 'ns@mail.com',
      fiscalcode: 'ocn',
      province: 'pr',
      phone: '912192'
    },
    {
      id: 3,
      name: 'Nicola3',
      lastname: 'Solzi',
      email: 'ns@mail.com',
      fiscalcode: 'ocn',
      province: 'pr',
      phone: '912192'
    },
    {
      id: 4,
      name: 'Nicola4',
      lastname: 'Solzi',
      email: 'ns@mail.com',
      fiscalcode: 'ocn',
      province: 'pr',
      phone: '912192'
    },
  ]
  getUsers() {
    return this.users
  }
  deleteUser(user) {
    let index = this.users.indexOf(user)
    if (index>=0) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: UserInterface) {
    //uso arrow function per trovare l id giusto da modificare
    const idx = this.users.findIndex((v) => v.id === user.id);
    //ritorna true o false
    alert(idx);
      if (idx !== -1) {
        //questa e la posizione con quell id nell array degli utenti
        this.users[idx] = user;
      }
    }
  createUser(user: UserInterface) {
    this.users.splice(0,0,user);
  }
}

