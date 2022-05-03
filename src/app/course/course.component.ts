import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Category } from '../shared/interfaces';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  courseSelected = new EventEmitter<Category>();

  products$: Observable<Category[]>;

  constructor(private server: ServerService, private router: Router) {}

  ngOnInit() {
    this.products$ = this.server.getAll();
  }

  onPageView(id: string) {
    this.router.navigate(['/cousre', { id }]);
    console.log(id);
  }
}
