import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import user from '../user.model';
import UserService from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class HoursGuard implements CanActivate {

  currentId: number = 0
  users: user[] = []

  constructor(private usersService: UserService) {
    this.users = usersService.getUsers();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.currentId = Number(route.paramMap.get('id'))
    console.log(this.currentId)
    var user = this.users.find(u => u.id === this.currentId)
    if (user?.startHour && user?.startHour <= new Date().getHours() && user?.endHour > new Date().getHours()) {
      return true;
    }
    alert('הכניסה למערכת בשעות עבודתך בלבד!')
    return false;
  }

}
