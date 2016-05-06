import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {secondComponent} from '../secondComponent/app.secondcomponent';
import {Home} from "../homeComponent/home.component";


@Component({
  selector: 'my-app',
  directives: [RouterOutlet],
  templateUrl: 'components/firstComponent/firstComponent.html'
})
@RouteConfig([
  { path: '/home', as: 'Home', component: Home },
  { path: '/', as: 'Login', component: secondComponent },
  { path: '/*other', as: 'Login', component: secondComponent }
])
export class firstComponent { }
