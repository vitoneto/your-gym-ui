import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    cards = [
        { icon: '', label: 'Saúde' },
        { icon: '', label: 'Massa muscular' },
        { icon: '', label: 'Força' }
    ];

    constructor() {}

    ngOnInit(): void {}
}
