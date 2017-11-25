import { Injectable } from "@angular/core";

interface IContact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {
  
  constructor() {}

  getContacts() {
    let contacts: IContact[] = [
      {
        name: "Janez",
        number: "1294124824"
      },
      {
        name: "John",
        number: "3132141131313"
      },
      {
        name: "Mary",
        number: "4312413313131"
      },
      {
        name: "Jasmine",
        number: "5313112424423"
      }
    ];
    return contacts;
  }
}
