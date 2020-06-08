import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index.component';


const dashRoute: Routes = [
    {
        path: '', component: IndexComponent
    }
]

@NgModule({
    declarations: [],
    exports: [RouterModule],
    imports: [RouterModule.forChild(dashRoute)]
})
export class DashboardRouting {

}