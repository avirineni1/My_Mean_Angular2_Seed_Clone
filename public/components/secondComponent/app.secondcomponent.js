System.register(['angular2/core', 'angular2/http', "angular2/router", "../authenticate", 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, authenticate_1;
    var secondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authenticate_1_1) {
                authenticate_1 = authenticate_1_1;
            },
            function (_1) {}],
        execute: function() {
            let secondComponent = class secondComponent {
                constructor(router, auth) {
                    this.router = router;
                    this.auth = auth;
                    this.users = [];
                    this.login = {};
                }
                onSubmit() {
                    this.auth.doLogin(this.login['username'].toString(), this.login['password'].toString())
                        .subscribe(response => localStorage.setItem('jwt', response.token_id), error => this.errorMessage = error);
                    /*.catch(function(e){
                      console.log(e);
                    });*/
                    if (localStorage.getItem('jwt')) {
                        this.router.navigate(['Home']);
                    }
                }
            };
            secondComponent = __decorate([
                core_1.Component({
                    selector: "second-component",
                    templateUrl: `components/secondComponent/secondComponent.html`,
                    providers: [authenticate_1.Authentication, http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [router_1.Router, authenticate_1.Authentication])
            ], secondComponent);
            exports_1("secondComponent", secondComponent);
        }
    }
});
