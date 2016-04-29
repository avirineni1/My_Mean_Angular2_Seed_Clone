import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http"
import {firstComponent} from './firstComponent/app.component'

bootstrap(firstComponent, [HTTP_PROVIDERS]);
