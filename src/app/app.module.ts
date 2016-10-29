import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PortalModule } from './portal/_portal.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/_admin.module';
import { LOGIN_COMPONENT } from './login/index';
import { SIGNUP_COMPONENTS } from './signup/index';
import { TestService } from './shared/test/test.service';
import {  HttpModule } from '@angular/http';
@NgModule({
    imports: [
        BrowserModule,
        PortalModule,
        FormsModule,
        AdminModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ...LOGIN_COMPONENT,
        ...SIGNUP_COMPONENTS
    ],
    providers: [TestService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
