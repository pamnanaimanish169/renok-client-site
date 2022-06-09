import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-booking',
    templateUrl :   './bookings.component.html',
    styleUrls : ['./bookings.component.css']
})

export class BookingComponent implements OnInit, OnDestroy {
    
    ngOnInit(): void {
        console.log('ngOnInit booking');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

}