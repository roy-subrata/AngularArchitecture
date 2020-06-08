import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'false-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() items: MenuModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}
