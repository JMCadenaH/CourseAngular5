import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
    selector: 'person-item',
    template: require('./person-item.html'),
    styles: [`
        div {
            font-size: 30px;
        }
        :host {
                border: 2px solid red;
        }
    `]
})

export class PersonItem implements OnInit {

    @Input() valor: any;
    @Output() eventClick = new EventEmitter();


    person: any = {};
    constructor() { }

    ngOnInit() {
        this.person = {
            name: this.valor,
            level: 'High'
        }
    }

    emiteAlPadre() {
        console.log('Me dieron click');
        this.eventClick.emit({
            name: 'Juan',
            editor: 'VSCode'
        });
    }

    executeFromParent() {
        console.log('Mi padre me lo ordeno');
    }
}