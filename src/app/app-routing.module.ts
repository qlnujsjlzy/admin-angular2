import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminRoutes} from "./admin/admin.routes";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {PortalComponent} from "./portal/portal.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/portal'},
    {
        path: 'portal',
        component: PortalComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    ...AdminRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
