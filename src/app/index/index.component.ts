import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('in index')
  }

  changeOfRoutes() {
    console.log('always comes here.... in index.component.ts')
  }

}
