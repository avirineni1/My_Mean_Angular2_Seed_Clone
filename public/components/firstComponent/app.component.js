System.register(['angular2/core', 'angular2/router', '../secondComponent/app.secondcomponent', "../homeComponent/home.component"], function(exports_1, context_1) {
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
    var core_1, router_1, app_secondcomponent_1, home_component_1;
    var firstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_secondcomponent_1_1) {
                app_secondcomponent_1 = app_secondcomponent_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            let firstComponent = class firstComponent {
            };
            firstComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    directives: [router_1.RouterOutlet],
                    templateUrl: 'components/firstComponent/firstComponent.html'
                }),
                router_1.RouteConfig([
                    { path: '/home', as: 'Home', component: home_component_1.Home },
                    { path: '/', as: 'Login', component: app_secondcomponent_1.secondComponent },
                    { path: '/*other', as: 'Login', component: app_secondcomponent_1.secondComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], firstComponent);
            exports_1("firstComponent", firstComponent);
        }
    }
});
