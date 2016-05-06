import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {CanActivate} from "angular2/router";
import {isloggedin} from "../is-loggedin";
import {Authentication} from "../authenticate"
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'home',
    templateUrl: 'components/homeComponent/homeComponent.html',
    providers: [Authentication, HTTP_PROVIDERS]
})

@CanActivate(() => isloggedin())
export class Home {
    errorMessage: String;
    constructor(public router: Router, private _auth: Authentication) {}

    onLogout() {
        this._auth.doLogout()
            .subscribe(
                () => this.router.navigate(['Login']), error =>  this.errorMessage = <any>error);
    }
}