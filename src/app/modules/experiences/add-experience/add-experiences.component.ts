import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-add-experiences',
    templateUrl :   './add-experiences.component.html',
    styleUrls : ['./add-experiences.component.css']
})

export class AddExperienceComponent implements OnInit, OnDestroy {
    
    ngOnInit(): void {
        console.log('ngOnInit add experiences');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

}