import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
            {
                path: 'dashboard',
                component: DashboardComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {
}
