System.register(["angular2/core", "angular2/router", "../is-loggedin", "../authenticate", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, is_loggedin_1, authenticate_1, http_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            },
            function (authenticate_1_1) {
                authenticate_1 = authenticate_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let Home = class Home {
                constructor(router, _auth) {
                    this.router = router;
                    this._auth = _auth;
                }
                onLogout() {
                    this._auth.doLogout()
                        .subscribe(() => this.router.navigate(['Login']), error => this.errorMessage = error);
                }
            };
            Home = __decorate([
                core_1.Component({
                    selector: 'home',
                    templateUrl: 'components/homeComponent/homeComponent.html',
                    providers: [authenticate_1.Authentication, http_1.HTTP_PROVIDERS]
                }),
                router_2.CanActivate(() => is_loggedin_1.isloggedin()), 
                __metadata('design:paramtypes', [router_1.Router, authenticate_1.Authentication])
            ], Home);
            exports_1("Home", Home);
        }
    }
});
