import {Injectable}     from '../../node_modules/angular2/core.d';
import {Http, Response} from '../../node_modules/angular2/http.d';
import {User}           from '../models/user';
import {Observable}     from '../../node_modules/rxjs/Observable.d';
@Injectable()
export class UserService {
    constructor (private http: Http) {}
    private _usersUrl = 'http://localhost:8080/api/users';  // URL to web api
    getUsers (): Observable<User[]> {
        return this.http.get(this._usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
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