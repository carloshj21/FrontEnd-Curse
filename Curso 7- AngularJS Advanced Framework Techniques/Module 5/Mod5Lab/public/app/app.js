angular.module('app', ['ngRoute']);

angular.module('app').config([
    '$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);