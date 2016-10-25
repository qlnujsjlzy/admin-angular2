import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CoreModule} from "../core/core.module";
import {Dashbard1RoutingModule} from "./context/dashbard-1-routing.module";
import {Dashbard1Module} from "./context/dashbard-1.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CoreModule,
        Dashbard1Module
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
