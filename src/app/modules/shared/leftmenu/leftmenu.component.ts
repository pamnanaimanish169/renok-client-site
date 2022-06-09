import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-leftmenu',
    templateUrl : './leftmenu.component.html',
    styleUrls : ['./leftmenu.component.css']
})

export class LeftMenuComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
        console.log('ngOnInit leftmenu');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy leftmenu');
    }
}