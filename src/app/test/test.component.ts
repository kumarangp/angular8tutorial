import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <input [id]="myId" type="text" value="kumaran">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="kumaran">
  `,
  styles: ['']
})
export class TestComponent implements OnInit {

  public name = "kumaran111";
  public siteUrl = window.location.href;

  public myId = "testId";

  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  greet() {
    return "Greet kumaran";
  }

}
