import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/shared/models/menu.model';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  muneItems: MenuModel[] = [];
  constructor() { }

  ngOnInit() {
    this.muneItems.push(
      {
        name: "dashboard", icon: "", routeLink: "dashboard", SubMenu: [
          { name: "Submenu", icon: "", routeLink: "", SubMenu: [] },
          { name: "Submenu1", icon: "", routeLink: "", SubMenu: [] },
          { name: "Submenu", icon: "", routeLink: "", SubMenu: [] },
        ]
      },
    );
    this.muneItems.push(
      {
        name: "product", icon: "", routeLink: "/home", SubMenu: [
          { name: "catgroy", icon: "", routeLink: "", SubMenu: [] },
          { name: "Submenu1", icon: "", routeLink: "", SubMenu: [] },
          { name: "Submenu", icon: "", routeLink: "", SubMenu: [] },
        ]
      },
    )
  }

}
