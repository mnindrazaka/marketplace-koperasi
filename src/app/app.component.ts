import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  beranda: Boolean;

  constructor(private _router: Router) {
    setTimeout(() => {
      console.log(this._router.url)
      this.beranda = this._router.url === '/';
    });
  }

}
