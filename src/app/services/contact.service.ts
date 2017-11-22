import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

    constructor(private _http: HttpClient) { }

    getSupportAgent() {
        return {
            agent: 86,
            name: 'Maxwell Smart'
        }
    }

    getAvailableAgents() {
        return Observable.create(observer => {
            let availableAgents: string[] = ['Robert', 'Julian', 'Ju'];

            availableAgents.forEach(agent => {
                observer.next(agent);
            });

            observer.complete();
        })
    }

    getGames() {
        return this.sendGet('/games');
    }

    private _urlBase: string = "http://localhost:8080";
    sendGet(uri: string) {
        let url = `${this._urlBase}${uri}`;
        return this._http.get(url, { responseType: 'json' })
            .catch(this.handlerError);
    }

    handlerError(error: any) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    }
}