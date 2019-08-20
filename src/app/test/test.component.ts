import { Component, OnInit } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-test',
  template: `
    <h1 class="text-success">Kumaran Kumaran</h1>
    <h1 [class]="successClass">Kumaran Kumaran</h1>

    <h1 [class.text-danger]="hasError">Kumaran</h1>

    <h1 [ngClass]="messageClasses">Kumaran</h1>
     
  `,
  styles: [`
    .text-success {
      color: green;
    }

    .text-danger {
      color: red;
    }

    .text-special {
      font-style: italic;
    }
  
  `
  ]
})
export class TestComponent implements OnInit {

  public successClass = "text-success";
  public hasError = false;

  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }




  
  

  constructor() { }

  ngOnInit() {
  }

  greet() {
    return "Greet kumaran";
  }

}
