//console.log('Archivo cargado');


angular.module( "myApp", 
                            [ 'ngRoute',
                              'userService' ] ).
config([
    '$routeProvider',
    function($routeProvider)
    {
      
        $routeProvider.
        when('/users', {
          templateUrl: 'templates/users.html',
          controller: 'UsersListCtrl'
        }).
        when('/users/new', {
          templateUrl: 'templates/users_details.html',
          controller: 'UsersNewCtrl'
        }).
        when('/users/:id', {
          templateUrl: 'templates/users_details.html',
          controller: 'UsersDetailsCtrl'
        }).
        otherwise({
          redirectTo: '/users'
        })
        ;
    }
  ])
;