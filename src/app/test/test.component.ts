import { Component, OnInit } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-test',
  template: `
   <h2 [style.color]="'orange'">style binding 1</h2>

   <h2 [style.color]="hasError ? 'red' : 'green'">style binding 2</h2>

   <h2 [style.color]="highlightColor">style binding 3</h2>

   <h2 [ngStyle]="titleStyles">style binding 4</h2>
     
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

  public highlightColor = "orange";
  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }

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
