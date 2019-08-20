import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    welcome {{name}}
  </h2>
  <h2>{{ 4 + 4 }}</h2>
  <h2>welcomee + {{name}}</h2>
  <h2>{{ name.length }}</h2>
  <h2>{{ name.toUpperCase() }}</h2>
  <h1>{{ greet() }}</h1>
  <h1>{{ siteUrl }}</h1>
  `,
  styles: ['']
})
export class TestComponent implements OnInit {

  public name = "kumaran111";
  public siteUrl = window.location.href;


  constructor() { }

  ngOnInit() {
  }

  greet() {
    return "Greet kumaran";
  }

}
