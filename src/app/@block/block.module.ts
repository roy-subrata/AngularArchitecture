import { NgModule } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/sidenav/nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouteModule } from '../routes/routes.module';

@NgModule({
    exports: [SidenavComponent, NavComponent],
    declarations: [SidenavComponent, NavComponent],
    imports: [SharedModule, RouteModule]
})
export class BlockModule {

}