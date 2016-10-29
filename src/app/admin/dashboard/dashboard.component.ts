import { Component, OnInit } from '@angular/core';

import { Router }            from '@angular/router';
import { TestService } from '../../shared/test/test.service';
import { Hero } from '../../shared/test/hero';
@Component({
    selector: 'admin-dashbard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    profileImg = require('./_images/profile.jpg');
    private heroes: Hero[];

    constructor(private testService: TestService,
                private router: Router) {
    }

    getHeroes(): void {
        this.testService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

}
