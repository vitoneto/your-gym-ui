import { Component, OnInit } from '@angular/core';
export interface bigCardInterface {
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
        { icon: 'health', label: 'Health' },
        { icon: 'muscle', label: 'Muscle mass' },
        { icon: 'strongness', label: 'Strongness' }
    ];
    bigCard: bigCardInterface;

    constructor() {}

    ngOnInit(): void {
        this.SelectedCard(0);
    }

    SelectedCard(index: number) {
        this.bigCard = this.cards[index];
    }
}
