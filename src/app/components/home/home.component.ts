import { Component, OnInit } from '@angular/core';
export interface bigCardInterface {
    bigCardAnimation: string;
    icon: string;
    label: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    cards = [
        {
            icon: 'health',
            label: 'Health',
            bigCardAnimation: 'animate__flipInY'
        },
        {
            icon: 'muscle',
            label: 'Muscle mass',
            bigCardAnimation: 'animate__bounceIn'
        },
        {
            icon: 'strongness',
            label: 'Strongness',
            bigCardAnimation: 'animate__fadeIn'
        }
    ];
    bigCard: bigCardInterface;
    bigCardChanged: boolean = false;
    bigCardAnimate: any;

    constructor() {}

    ngOnInit(): void {
        this.SelectedCard(0);
    }

    SelectedCard(index: number) {
        this.bigCard = this.cards[index];
        this.bigCardChanged = true;
        clearTimeout(this.bigCardAnimate);
        this.bigCardAnimate = setTimeout(() => {
            this.bigCardChanged = false;
        }, 1000);
    }
}
