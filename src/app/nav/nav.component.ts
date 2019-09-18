import { Component, OnInit } from '@angular/core';
import {Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  links = [];
  activeLink;
  constructor(router: Router) {
    for (let i = 0; i < router.config.length; i++) {
      let routePath: string = router.config[i].path;
      this.links.push(routePath);
      console.log("Test")
    }

    this.activeLink = this.links[0];
  }
}
