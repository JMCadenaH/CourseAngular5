import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

    constructor() { }

    getSupportAgent() {
        return {
            agent: 86,
            name: 'Maxwell Smart'
        }
    }
}