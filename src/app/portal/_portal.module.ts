import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PortalComponent} from "./portal.component";

import {NAVBAR_COMPONENTS} from "./navbar/index";
import {HOME_COMPONENTS} from "./home/index";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        PortalComponent,
        ...NAVBAR_COMPONENTS,
        ...HOME_COMPONENTS
    ]
})
export class PortalModule {
}
