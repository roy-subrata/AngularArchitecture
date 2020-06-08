import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const appRoute: Routes = [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(f => f.DashboardModule) },
    {
        path: '**',
        redirectTo: "/"
    }
]
@NgModule({
    exports: [SharedModule, RouterModule],
    imports: [RouterModule.forRoot(appRoute)]
})
export class RoutingModule {

}