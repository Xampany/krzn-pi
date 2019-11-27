import { Injectable } from '@angular/core';
import { Led } from '../model/led';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private client: HttpClient) {}

  readColors(): Observable<Led[]> {
    const resp = this.client.get<string[]>(
      'https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors'
    );

    const result = resp.pipe(
      map(colors => {
        const leds: Led[] = [];

        colors.forEach((color, index) => {
          const led: Led = {
            index,
            color
          };
          leds.push(led);
        });

        // for (const [index, color] of colors.entries()) {
        // }

        return leds;
      })
    );

    return result;
  }
}
