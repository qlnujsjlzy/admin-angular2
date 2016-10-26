import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {NAVBAR_COMPONENT} from "./dashboard/navbar/index";
import {DashboardModule} from "./dashboard/dashboard.module";
import {TopnavbarModule} from "./dashboard/navbar/topnavbar.module";
import {NavigationModule} from "./dashboard/navbar/navigation.module";

@NgModule({

    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        DashboardModule
    ],
    declarations: [
        AdminComponent,
        ...NAVBAR_COMPONENT
    ],
    exports: [
        AdminComponent
    ]
})
export class AdminModule {
}
