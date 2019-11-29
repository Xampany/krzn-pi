import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from '../shared/color.service';
import { Led } from '../model/led';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  led: Led;

  constructor(private route: ActivatedRoute, private service: ColorService) {}

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');

    this.service
      .readColors()
      .toPromise()
      .then(leds => (this.led = leds[index]));
  }
}
