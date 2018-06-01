import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public topLinks: Link[];
  constructor() { }

  ngOnInit() {
    this.topLinks = [
      { text: 'Gmail', url: '' },
      { text: 'Images', url: '' },
    ];

  }

}
