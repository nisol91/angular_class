import { UserInterface } from "../interfaces/userinterface";

export class User implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  email;
  fiscalcode;
  province;
  phone;

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.fiscalcode = '';
    this.province = '';
    this.phone = '';

  }
}
