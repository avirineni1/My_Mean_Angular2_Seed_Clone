System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isloggedin() {
        return !!localStorage.getItem('jwt');
    }
    exports_1("isloggedin", isloggedin);
    return {
        setters:[],
        execute: function() {
        }
    }
});
