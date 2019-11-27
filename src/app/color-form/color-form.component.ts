import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent implements OnInit {
  color = 'red';

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      color: new FormControl('yellow', [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    this.form.statusChanges.subscribe({
      next: v => console.log(v)
    });

    this.form
      .get('color')
      .valueChanges.pipe(debounceTime(300))
      .subscribe({
        next: v => console.log(v)
      });
  }

  updateColor(form: NgForm) {
    console.log(form.value);
  }
}
