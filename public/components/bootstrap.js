System.register(['angular2/platform/browser', "angular2/http", 'angular2/router', './firstComponent/app.component', "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, router_1, app_component_1, router_2, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.firstComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(router_2.APP_BASE_HREF, { useValue: '/' })]);
        }
    }
});
