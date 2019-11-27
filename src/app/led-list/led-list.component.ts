import { Component, OnInit, OnDestroy } from '@angular/core';
import { Led } from '../model/led';
import { ColorService } from '../shared/color.service';
import { tap, delay } from 'rxjs/operators';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent implements OnInit, OnDestroy {
  leds: Led[];

  poll$: Observable<number>;

  // private sub: Subscription;

  constructor(private service: ColorService) {}

  ngOnInit() {
    this.poll$ = timer(3000, 1000);

    // .pipe(tap(v => console.log(v)))

    this.readLeds();
  }

  ngOnDestroy() {
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

  setColor(index: number) {
    this.service.updateColor(index).then(color => {
      this.leds[index] = { index, color };
    });
  }

  readLeds() {
    const leds$ = this.service.readColors();

    leds$
      .pipe(
        delay(2000),
        tap(res => console.log(res))
      )
      .subscribe({
        next: leds => (this.leds = leds)
      });
  }
}
