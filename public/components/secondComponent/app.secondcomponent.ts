import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector:"second-component",
  templateUrl: `components/secondComponent/secondComponent.html`
})
export class secondComponent {
  users: String[] = [];
  constructor(public http: Http) {
    this.http.get('http://localhost:8080/api/users')
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data => this.users = data.json());
  }
}
