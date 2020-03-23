import { Component } from '@angular/core';

interface Button {
  text: string; // text to display on the button
  icon: {
    spinner?: boolean; // whether to replace the icon with a spinner
    path: string; // icon name in the assets/icons folder
    position: string; // specify side of icon, values: left, right or both
  },
  status: string; // status determining wether to show spinner or not, values: initial, loading or success
}

@Component({
  selector: 'app-root',
  template: `
    <app-button
      *ngFor="let button of buttons; let i = index"
      [buttonText]="button.text"
      [iconSpinner]="button.icon.spinner"
      [iconPath]="button.icon.path"
      [iconPosition]="button.icon.position"
      [status]="button.status"
      (buttonClick)="toggleStatus($event, i)">
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
      status: 'loading'
    },
    {
      text: 'Settings',
      icon: {
        spinner: true,
        path: 'icon-cog.svg',
        position: 'both'
      },
      status: 'success'
    },
    {
      text: 'Printer',
      icon: {
        spinner: true,
        path: 'icon-printer.svg',
        position: 'right'
      },
      status: 'initial'
    }
  ]

  public toggleStatus(status: string, index: number): void { // <-- already done
    this.buttons[index].status = (status === 'loading') ? 'success' : 'loading';
  }
}
