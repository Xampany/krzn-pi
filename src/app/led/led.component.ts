import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Led } from '../model/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {
  @Input('piLed')
  led: Led;

  @Output()
  ledChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  /**
   * Reagiert auf das Klicken der bunten Büchse
   */
  handleClick(ev: MouseEvent) {
    if (ev.ctrlKey) {
      this.ledChange.emit(this.led.index);
    }
  }
}
