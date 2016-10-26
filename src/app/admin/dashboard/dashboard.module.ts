import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardComponent} from "./dashboard.component";


@NgModule({

    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports:[DashboardComponent]
})
export class DashboardModule {
}
