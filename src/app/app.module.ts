import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {PortalModule} from "./portal/_portal.module";
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/_admin.module";
import {LOGIN_COMPONENT} from "./login/index";
import {SIGNUP_COMPONENTS} from "./signup/index";

@NgModule({
    imports: [
        BrowserModule,
        PortalModule,
        AdminModule,
        SharedModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ...LOGIN_COMPONENT,
        ...SIGNUP_COMPONENTS

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
