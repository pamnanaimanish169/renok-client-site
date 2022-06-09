import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ActivityComponent } from "./activity.component";

const activityRoutes = [
    {   path : '', component : ActivityComponent    }
];

@NgModule({
    declarations : [
        ActivityComponent
    ],
    imports : [
        RouterModule.forChild(activityRoutes),
        CommonModule
    ],
    providers : [],
})

export class ActivityModule {   }