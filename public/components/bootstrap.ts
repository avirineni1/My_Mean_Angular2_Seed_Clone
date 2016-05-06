import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http"
import {ROUTER_PROVIDERS} from 'angular2/router'
import {firstComponent} from './firstComponent/app.component'
import {APP_BASE_HREF} from "angular2/router";
import {provide} from "angular2/core";

bootstrap(firstComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,provide(APP_BASE_HREF, {useValue : '/' })]);
