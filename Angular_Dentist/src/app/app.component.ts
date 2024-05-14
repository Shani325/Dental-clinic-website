import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shani';

  id: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))

  }



  logOut() {
    this.router.navigate([""])
  }

  goHome() {
    console.log(this.router.url)
    var url = this.router.url
    console.log(url)

    if (url.includes('doctor'))
      this.router.navigate([url.slice(0, 9)])
    else if (url.includes('admin'))
      this.router.navigate([url.slice(0, 8)])
    else if (url.includes('secretary'))
      this.router.navigate([url.slice(0, 12)])
  }
}
