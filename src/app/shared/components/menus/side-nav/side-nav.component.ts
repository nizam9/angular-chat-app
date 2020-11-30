import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private _router: Router,) { }

  ngOnInit() {
  }

  navigate(){
    // [routerLink]="['chat/composer/12']"
    this._router.navigate(['index/chat']);
  }


}
