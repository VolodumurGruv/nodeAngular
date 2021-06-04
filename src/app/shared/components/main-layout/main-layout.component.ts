import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatRipple) ripple: MatRipple;

  isLogin: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  corsesTrigger() {
    this.trigger.openMenu();
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true,
    });

    rippleRef.fadeOut();
  }
}
