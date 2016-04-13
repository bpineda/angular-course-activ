//console.log('Archivo cargado');


var myApp = angular.module( "myApp", 
                            [ 'ngRoute' ] ).
config([
    '$routeProvider',
    function($routeProvider)
    {
      
        $routeProvider.
        when('/users', {
          templateUrl: 'templates/users.html'
        }).
        when('/users/new', {
          templateUrl: 'templates/users_details.html'
        }).
        when('/users/:id', {
          templateUrl: 'templates/users_details.html'
        }).
        otherwise({
          redirectTo: '/users'
        })
        ;
    }
  ])
;