import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-add-experiences',
    templateUrl :   './experiences.component.html',
    styleUrls : ['./experiences.component.css']
})

export class ExperienceComponent implements OnInit, OnDestroy {
    
    ngOnInit(): void {
        console.log('ngOnInit experiences');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

}