import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BLUE, RED } from '../shared/constants';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Input()
  color: string;

  @Output('color')
  colorOutput = new EventEmitter();

  choose(color) {
    this.colorOutput.emit(color);
  }

  reset() {
    this.colorOutput.emit('black');
  }

  constructor() { }

  ngOnInit() {
  }

}
