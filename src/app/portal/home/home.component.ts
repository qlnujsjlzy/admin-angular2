import { Component } from '@angular/core';
@Component({
    selector: 'portal-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    private laptop: string;
    private dashboard: string;
    private avatar1: string;
    private avatar2: string;
    private avatar3: string;
    private iphone: string;

    constructor() {
        this.laptop = require('./_images/laptop.png');
        this.dashboard = require('./_images/perspective.png');
        this.avatar1 = require('./_images/avatar1.jpg');
        this.avatar2 = require('./_images/avatar2.jpg');
        this.avatar3 = require('./_images/avatar3.jpg');
        this.iphone = require('./_images/iphone.jpg');

    }
}
