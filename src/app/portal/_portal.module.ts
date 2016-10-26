import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PortalComponent } from './portal.component';

import { NAVBAR_COMPONENTS } from './navbar/index';
import { HOME_COMPONENTS } from './home/index';
import { PortalRoutingModule } from './_portal-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        PortalRoutingModule
    ],
    declarations: [
        PortalComponent,
        ...NAVBAR_COMPONENTS,
        ...HOME_COMPONENTS
    ]
})
export class PortalModule {
}

