import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        HomeModule,
        BrowserModule,
        CoreModule,
        AdminRoutingModule,
    ],
    exports: [
        AdminComponent
    ]
})
export class AdminModule {
}
