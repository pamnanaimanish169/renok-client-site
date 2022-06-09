import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AddExperienceComponent } from "./add-experience/add-experiences.component";
import { ExperienceComponent } from "./experiences.component";

const experienceRoutes = [
    {   path : '', component : ExperienceComponent    },
    {   path : 'add-experiences', component : AddExperienceComponent}
];

@NgModule({
    declarations : [
        ExperienceComponent,
        AddExperienceComponent
    ],
    imports : [
        RouterModule.forChild(experienceRoutes),
        CommonModule
    ],
    providers : [],
})

export class ExperienceModule {   }