import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    cards = [
        { icon: 'health', label: 'Health' },
        { icon: 'muscle', label: 'Muscle mass' },
        { icon: 'strongness', label: 'Strongness' }
    ];

    constructor() {}

    ngOnInit(): void {}
}
