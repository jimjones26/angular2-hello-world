import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input('placeholder')
  placeholder: string = 'Type your search';

  clear(input) {
    console.log('clear clicked...');
    input.value = '';
  }

  constructor() { }

  ngOnInit() { }

}
