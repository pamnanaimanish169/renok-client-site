import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-home',
    templateUrl :   './home.component.html',
    styleUrls : ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
    
    toggle : boolean = false;

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

    clickShows(event : any)    {
        this.toggle = !this.toggle;
        console.log(this.toggle);
    }
}