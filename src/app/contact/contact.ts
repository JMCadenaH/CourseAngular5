import { Component, OnInit } from '@angular/core';
import { ContactService } from "../services/contact.service";

@Component({
    selector: 'contact',
    template: require('./contact.html')
})

export class ContactComponent implements OnInit {
    constructor(private _contactService: ContactService) { }

    ngOnInit() {

        let agents = this._contactService.getSupportAgent();
        console.log(agents);

    }
}