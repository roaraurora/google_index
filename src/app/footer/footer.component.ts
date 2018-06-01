import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public leftLinks: Link[];
  public rightLinks: Link[];
  constructor() { }

  ngOnInit() {
    this.leftLinks = [
      { text: 'Advertising', url: '' },
      { text: 'Business', url: '' },
      { text: 'About', url: '' }
    ];
    this.rightLinks = [
      { text: 'Settings', url: '' },
      { text: 'Terms', url: '' },
      { text: 'Privacy', url: '' }
    ];
  }
}
