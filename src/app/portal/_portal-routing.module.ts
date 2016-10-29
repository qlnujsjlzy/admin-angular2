import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PortalComponent } from './portal.component';

const routes: Routes = [
    {
        path: 'index',
        component: PortalComponent
    },
    {
        path: 'portal',
        component: PortalComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PortalRoutingModule {
}

