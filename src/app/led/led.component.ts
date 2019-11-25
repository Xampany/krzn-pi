import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {
  index = 1;

  color = 'yellow';

  constructor() {}

  ngOnInit() {}
}
