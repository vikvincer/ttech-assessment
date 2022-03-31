import { Component, Input, OnInit } from '@angular/core';
import { NavListModel } from '../../models/navList.model';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  @Input() navigationList: NavListModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
