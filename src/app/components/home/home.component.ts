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
    bigCard: bigCardInterface;
    bigCardChanged: boolean = false;
    bigCardAnimate: any;
    cadSelectedIndex: number = 0;
    bigCardpicture: string = 'muscle-mass';

    cards = [
        {
            icon: 'muscle',
            label: 'Muscle mass',
            bigCardAnimation: 'animate__bounceIn'
        },
        {
            icon: 'health',
            label: 'Health',
            bigCardAnimation: 'animate__flipInY'
        },
        {
            icon: 'strongness',
            label: 'Strongness',
            bigCardAnimation: 'animate__fadeIn'
        }
    ];

    constructor() {}

    ngOnInit(): void {
        this.SelectedCard(0);
    }

    SelectedCard(index: number) {
        this.cadSelectedIndex = index;
        this.bigCard = this.cards[index];
        this.bigCardChanged = true;
        this.chooseRightPicture(index);
        clearTimeout(this.bigCardAnimate);
        this.bigCardAnimate = setTimeout(() => {
            this.bigCardChanged = false;
        }, 1000);
    }

    chooseRightPicture(index: number) {
        switch (index) {
            case 0:
                this.bigCardpicture = 'muscle-mass';
                break;
            case 1:
                this.bigCardpicture = 'health';
                break;
            case 2:
                this.bigCardpicture = 'strongness';
                break;
        }
    }
}
