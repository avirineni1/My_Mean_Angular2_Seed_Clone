import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {User} from '../models/user';
import 'rxjs/add/operator/map';
@Injectable()
export class Authentication {

    constructor(public http: Http) {
    }

    doLogin(username: any, password: any) {
        var body = "username=" + username + "&password=" + password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http
            .post('/api/authenticate', body, {headers : headers})
            .map(response => response.json());
    }

    doLogout() {
        return this.http.get('/api/logout', {
         headers: new Headers({
         'x-access-token': localStorage.getItem('jwt')
         })
         })
         .map((res : any) => {
         localStorage.removeItem('jwt');
         });
    }
}