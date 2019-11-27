import { Component, OnInit } from '@angular/core';
import { Led } from '../model/led';
import { ColorService } from '../shared/color.service';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent implements OnInit {
  leds: Led[];

  constructor(private service: ColorService) {}

  ngOnInit() {
    const leds$ = this.service.readColors();

    leds$
      .pipe(
        delay(15000),
        tap(res => console.log(res))
      )
      .subscribe({
        next: leds => (this.leds = leds)
      });
  }
}
