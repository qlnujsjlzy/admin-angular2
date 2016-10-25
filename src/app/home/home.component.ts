import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
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
        this.laptop = require('../../public/img/landing/laptop.png');
        this.dashboard = require('../../public/img/landing/perspective.png');
        this.avatar1 = require('../../public/img/landing/avatar1.jpg');
        this.avatar2 = require('../../public/img/landing/avatar2.jpg');
        this.avatar3 = require('../../public/img/landing/avatar3.jpg');
        this.iphone = require('../../public/img/landing/iphone.jpg');

    }
}
