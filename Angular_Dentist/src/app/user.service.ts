import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import user from './user.model';

@Injectable({
  providedIn: 'root'
})
export default class UserService {

  constructor(private router: Router) { }
  users: user[] = [
    new user(1, "admin", "1122", 1, "שני", "אנגל", "0548506339", "בני ברק", "כהנמן", 145, new Date(2003, 1, 1).toLocaleDateString(), [1, 3, 5], -1, 23.9),
    new user(2, "dEdri", "1234", 2, "תהילה", "אדרי", "0548484899", "בני ברק", "כהנמן", 67, new Date(2000, 6, 12).toLocaleDateString(), [2, 4, 6], -1, 23.9),
    new user(3, "dGozlan", "2211", 2, "שרי", "גוזלן", "0548454690", "בני ברק", "פרדו", 5, new Date(2000, 11, 23).toLocaleDateString(), [1, 2, 3], -1,23.9),
    new user(4, "sInbar", "4321", 3, "אסתר", "ענבר", "0548475540", "בני ברק", "יהודה הנשיא", 60, new Date(2000, 4, 4).toLocaleDateString(), [2, 5, 6], -1,23.9)
  ]

  user: user | undefined;

  getUsers(): user[] {
    return this.users;
  }

  setUser(name: string, pass: string) {
    this.user = this.users.find(i => { return i.userName === name && i.password === pass })
  }

  // getUserByName(name: string): user | undefined {
  //   return this.users.find(i => i.userName === name)
  // }

  deleteUser(user: user) {
    var index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  addUser(user: user) {
    this.users.push(user)
    this.router.navigate([`admin/${this.user?.id}`])
  }
}
