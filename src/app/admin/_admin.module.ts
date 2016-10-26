import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NAVBAR_COMPONENT } from './dashboard/navbar/index';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminRoutingModule } from './_admin-routing.module';
import { FOOTER_COMPONENT } from './dashboard/footer/index';

@NgModule({

    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        DashboardModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        ...NAVBAR_COMPONENT,
        ...FOOTER_COMPONENT
    ],
    exports: [
        AdminComponent
    ]
})
export class AdminModule {
}
