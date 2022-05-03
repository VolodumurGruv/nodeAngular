import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../shared/interfaces';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ServerService],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  categories: Category[] = [];
  url = 'localhost:3000/api';

  constructor(
    private server: ServerService,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(null),
      product: new FormControl(null),
      img: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
    });
  }

  ngOnInit() {}

  submit() {
    console.log(this.form.value);
    const category: Category = {
      name: this.form.value.name,
      product: this.form.value.product,
      img: this.form.value.img,
      description: this.form.value.description,
      price: this.form.value.price,
    };
    this.server.create(category).subscribe(
      () => {
        console.log('Added success');
        this.ngZone.run(() => this.router.navigateByUrl(`${this.url}/courses`));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
