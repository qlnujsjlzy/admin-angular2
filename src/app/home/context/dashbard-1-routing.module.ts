import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Dashbard1Component} from "./dashbard-1.component";


const routes: Routes = [
    {
        path: 'admin',
        children: [
            {path: '',  redirectTo:'admin/dashbard1'},
            {path: 'dashbard1', component: Dashbard1Component}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class Dashbard1RoutingModule {
}
