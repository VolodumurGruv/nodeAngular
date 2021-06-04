import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ServerService],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];

  constructor(
    private server: ServerService,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(null),
      surname: new FormControl(null),
    });
  }

  ngOnInit() {}

  submit() {
    const user: User = {
      name: this.form.value.name,
      surname: this.form.value.surname,
    };
    this.server.create(user).subscribe(
      () => {
        console.log('Added success');
        this.ngZone.run(() => this.router.navigateByUrl('/'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
