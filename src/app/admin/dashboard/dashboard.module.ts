import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import {  HttpModule } from '@angular/http';
@NgModule({

    imports: [
        CommonModule,
        BrowserModule,
        HttpModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [DashboardComponent]
})
export class DashboardModule {
}
