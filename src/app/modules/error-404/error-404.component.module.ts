import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-error404',
    templateUrl :   './error-404.component.html',
    styleUrls : ['./error-404.component.css']
})

export class Error404Component implements OnInit, OnDestroy {
    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
}