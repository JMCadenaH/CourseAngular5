import { Injectable } from '@angular/core';
import { } from "rxjs";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommService {

    private eventManager = new Subject<any>();

    constructor() { }
    setEventManager(value: string) {
        this.eventManager.next(value);
    }

    getEventManager() {
        return this.eventManager.asObservable();
    }
}