import { Component, OnInit } from '@angular/core';
import { ContactService } from "../services/contact.service";
import { Game } from "../model/game";

@Component({
    selector: 'reactive',
    template: require('./reactive.html')
})

export class ReactiveComponent implements OnInit {
    person: any = {};
    games: any = [];
    constructor(private _contactService: ContactService) { }

    ngOnInit() {
        this.person = {
            name: 'juan',
            lastName: 'cadena',
            gitHubTag: 'JMCadenaH',
            currentDate: new Date(),
            anualPrice: 150
        };
    }

    getMyGames() {
        return this._contactService
            .getGames()
            .subscribe(
            value => this.games = value,
            error => console.log(error),
            () => console.log('Complete'));
    }

    pickGame(game: any) {
        alert(`Game: ${game.name} - Console: ${game.platform}`)
    }
}