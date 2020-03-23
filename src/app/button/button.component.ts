import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() iconPath: string;
  @Input() iconPosition: string;

  position = {
    left: false,
    right: false,
    both: false
  }
  
  constructor() { }

  ngOnInit() {
    this.position[this.iconPosition] = true;
  }
}
