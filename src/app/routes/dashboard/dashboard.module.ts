import { NgModule } from '@angular/core';
import { DashboardRouting } from './dashboard.routing';

import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './components/index.component';


@NgModule({
    declarations: [IndexComponent],
    exports: [SharedModule, DashboardRouting,],
    imports: [SharedModule, DashboardRouting],
})

export class DashboardModule {

}