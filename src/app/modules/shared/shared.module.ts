import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { LeftMenuComponent } from "./leftmenu/leftmenu.component";

const sharedRoutes = [
];

@NgModule({
    declarations : [
        LeftMenuComponent,
        HeaderComponent
    ],
    imports : [
        // RouterModule.forChild(sharedRoutes),
        CommonModule
    ],
    providers : [],
})

export class SharedModule {   }