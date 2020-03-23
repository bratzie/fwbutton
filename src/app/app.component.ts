import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-button *ngFor="let button of buttons" [buttonText]="button.text"></app-button>
  `,
  styles: [`
    :host {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to bottom right, #DBC694, #D18375);
    }
  `]
})
export class AppComponent {
  buttons = [
    {
      text: 'Button 1'
    },
    {
      text: 'Button 2'
    }
  ]
}
