export class UsersService {
  users = [
    {
      name: 'Nicola',
      lastname: 'Solzi',
      email: 'ns@mail.com',
      fiscalcode: 'ocn',
      province: 'pr',
      phone: '912192'
    },
    {
      name: 'Nicola2',
      lastname: 'Solzi',
      email: 'ns@mail.com',
      fiscalcode: 'ocn',
      province: 'pr',
      phone: '912192'
    },
    {
      name: 'Nicola3',
      lastname: 'Solzi',
      email: 'ns@mail.com',
      fiscalcode: 'ocn',
      province: 'pr',
      phone: '912192'
    },
    {
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
}
