import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pi-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Output()
  reload = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  handleReload() {
    this.reload.emit();
  }
}
