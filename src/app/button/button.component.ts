import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() iconSpinner: boolean;
  @Input() iconPath: string;
  @Input() iconPosition: string;
  @Input() status: string;

  @Output() buttonClick: EventEmitter<any>;

  position = {
    left: false,
    right: false,
    both: false
  }
  
  constructor() {
    this.buttonClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.position[this.iconPosition] = true;
  }

  handleOnClick(): void {
    this.buttonClick.next(this.status);
  }
}
