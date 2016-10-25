import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './navbar/navbar.module';
import {NavigationModule} from "./navbar/navigation.module";
import {TopnavbarModule} from "./navbar/topnavbar.module";
import {FooterModule} from "./footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        NavigationModule,
        TopnavbarModule,
        FooterModule
    ],
    exports: [
        NavbarModule,
        NavigationModule,
        TopnavbarModule,
        FooterModule
    ]
})
export class CoreModule {
}
