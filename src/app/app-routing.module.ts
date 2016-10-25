import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {Dashbard1Component} from "./home/context/dashbard-1.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'admin/dashbard1'},
    {path: 'index', component: AppComponent},
    {
        path: 'admin',
        children: [
            {path: '',  redirectTo:'admin/dashbard1'},
            {path: 'dashbard1', component: Dashbard1Component}
        ]
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}


/*


 import { NgModule } from '@angular/core';
 import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
 import {AdminComponent} from "./admin.component";

 const appRoutes: Routes = [
 {
 path: '/admin',
 component: AdminComponent
 }
 ];
 @NgModule({
 imports: [
 RouterModule.forRoot(appRoutes, {
 preloadingStrategy: PreloadAllModules
 })
 ],
 exports: [
 RouterModule
 ],
 providers: []
 })
 export class AppRoutingModule {

 }
 */
