import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {NavigationComponent} from "./navigation.component";
@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule {
}