import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {secondComponent} from '../secondComponent/app.secondcomponent'


@Component({
  selector: 'my-app',
  directives: [secondComponent],
  providers:  [HTTP_PROVIDERS],
  templateUrl: 'components/firstComponent/firstComponent.html'
})
export class firstComponent { }
