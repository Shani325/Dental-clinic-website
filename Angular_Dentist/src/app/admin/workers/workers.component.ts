import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import user from 'src/app/user.model';

import UserService from 'src/app/user.service';

@Component({
  selector: 'workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: user[] = []
  selectedWorker: user | undefined;

  constructor(private userService: UserService, private router: Router) {
    this.workers = userService.getUsers();
  }

  ngOnInit(): void {
  }

  deleteWorker(worker: user) {
    this.userService.deleteUser(worker);
  }

  addWorker() {
    this.router.navigate([`admin/${this.userService.user?.id}/form`])
  }

  showWorker(worker: user) {
    worker.permission=Number(worker.permission)
    if (worker.permission === 1)
      this.router.navigate([`/admin/${worker.id}`]);
    else if (worker.permission === 2)
      this.router.navigate([`/doctor/${worker.id}`]);
    else if (worker.permission === 3)
      this.router.navigate([`/secretary/${worker.id}`]);
  }
}
