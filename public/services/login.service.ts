import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {User}           from '../models/user';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor (private http: Http) {}
    private _loginUrl = 'http://localhost:8080/api/authenticate';  // URL to web api
    getUsers (): Observable<User[]> {
        return this.http.post(this._loginUrl, [{username}]);
    }
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}