import { Component } from '@angular/core';

interface Button {
  text: string; // text to display on the button
  icon: {
    path: string; // icon name in the assets/icons folder
    position: string; // specify side of icon, values: left, right or both
  }
}

@Component({
  selector: 'app-root',
  template: `
    <app-button
      *ngFor="let button of buttons"
      [buttonText]="button.text"
      [iconPath]="button.icon.path"
      [iconPosition]="button.icon.position">
    </app-button>
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
  buttons: Button[] = [
    {
      text: 'Home',
      icon: {
        path: 'icon-home.svg',
        position: 'left'
      },
    },
    {
      text: 'Settings',
      icon: {
        path: 'icon-cog.svg',
        position: 'both'
      }
    },
    {
      text: 'Printer',
      icon: {
        path: 'icon-printer.svg',
        position: 'right'
      }
    }
  ]
}
