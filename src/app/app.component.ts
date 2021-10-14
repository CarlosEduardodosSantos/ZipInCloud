import { Component } from '@angular/core';

import {
  faStarHalfAlt,
  faBars,
  faCube,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zipincloud';
  faStarHalfAlt = faStarHalfAlt;
  faBars = faBars;
  faCube = faCube;
  faBookOpen = faBookOpen;

  ngOnInit() {
    $('#menu-toggle').click(function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }
}
