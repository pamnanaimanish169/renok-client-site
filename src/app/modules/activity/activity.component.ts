import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-activity',
    templateUrl :   './activity.component.html',
    styleUrls : ['./activity.component.css']
})

export class ActivityComponent implements OnInit, OnDestroy {
    
    ngOnInit(): void {
        console.log('ngOnInit activity');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

}