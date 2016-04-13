var myApp = angular.module("myApp", ['ngRoute'] ).
config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider,$locationProvider)
    {
      
        $routeProvider.
        when('/logged', {
          templateUrl: 'templates/index_logged.html'
        }).
        when('/guest', {
          templateUrl: 'templates/index_guest.html'
        }).
        when('/login', {
          templateUrl: 'templates/login.html'
        }).
        when('/logout', {
          templateUrl: 'templates/login.html'
          
        }).
        otherwise({
          redirectTo: '/guest'
        })
        ;
    }
  ])
;