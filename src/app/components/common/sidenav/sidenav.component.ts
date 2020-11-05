import { Component, HostListener, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  currentWindowWidth: number;
  constructor() { }

  ngOnInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);

    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.currentWindowWidth = window.innerWidth;
  }

}
