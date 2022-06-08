import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-home',
    templateUrl :   './home.component.html',
    styleUrls : ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
}