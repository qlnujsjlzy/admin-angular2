import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {TopnavbarComponent} from "./topnavbar.component";
@NgModule({
    declarations: [
        TopnavbarComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        TopnavbarComponent
    ]
})
export class TopnavbarModule {
}
