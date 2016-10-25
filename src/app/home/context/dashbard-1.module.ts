import { NgModule } from '@angular/core';

import {Dashbard1Component} from "./dashbard-1.component";
import {Dashbard1RoutingModule} from "./dashbard-1-routing.module";

@NgModule({
    declarations: [
        Dashbard1Component
    ],
    imports: [
        Dashbard1RoutingModule,
    ],
    exports: [
        Dashbard1Component
    ]
})
export class Dashbard1Module {
}
