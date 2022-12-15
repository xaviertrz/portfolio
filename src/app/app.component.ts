import { Component } from '@angular/core';

import { writer } from './tw';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit(): void {
    writer();
  }
}
