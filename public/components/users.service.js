System.register(['../../node_modules/angular2/core.d', '../../node_modules/angular2/http.d', '../../node_modules/rxjs/Observable.d'], function(exports_1, context_1) {
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
    var core_d_1, http_d_1, Observable_d_1;
    var UserService;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            },
            function (http_d_1_1) {
                http_d_1 = http_d_1_1;
            },
            function (Observable_d_1_1) {
                Observable_d_1 = Observable_d_1_1;
            }],
        execute: function() {
            let UserService = class UserService {
                constructor(http) {
                    this.http = http;
                    this._usersUrl = 'http://localhost:8080/api/users'; // URL to web api
                }
                getUsers() {
                    return this.http.get(this._usersUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                extractData(res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    let body = res.json();
                    return body.data || {};
                }
                handleError(error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    let errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_d_1.Observable.throw(errMsg);
                }
            };
            UserService = __decorate([
                core_d_1.Injectable(), 
                __metadata('design:paramtypes', [http_d_1.Http])
            ], UserService);
            exports_1("UserService", UserService);
        }
    }
});
