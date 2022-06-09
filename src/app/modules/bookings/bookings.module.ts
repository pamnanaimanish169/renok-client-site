import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BookingComponent } from "./bookings.component";

const bookingRoutes = [
    {   path : '', component : BookingComponent    }
];

@NgModule({
    declarations : [
        BookingComponent
    ],
    imports : [
        RouterModule.forChild(bookingRoutes),
        CommonModule
    ],
    providers : [],
})

export class BookingModule {   }