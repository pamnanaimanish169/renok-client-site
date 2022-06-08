import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const homeRoutes = [
    {   path : '', component : HomeComponent    }
];

@NgModule({
    declarations : [
        HomeComponent
    ],
    imports : [
        RouterModule.forChild(homeRoutes)
    ],
    providers : [],
})

export class HomeModule {   }