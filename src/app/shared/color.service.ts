import { Injectable } from '@angular/core';
import { Led } from '../model/led';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private client: HttpClient) {}

  readColors(): Promise<Led[]> {
    const resp = this.client.get<string[]>(
      'https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors'
    );

    const prom = resp
      .pipe(
        map(colors => {
          const leds: Led[] = [];

          for (let i = 0; i < colors.length; i++) {
            const led: Led = {
              index: i,
              color: colors[i]
            };
            leds.push(led);
          }

          return leds;
        })
      )
      .toPromise();

    return prom;
  }
}
