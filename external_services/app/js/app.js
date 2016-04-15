//console.log('Archivo cargado');


angular.module( "myApp", 
                            [ 'ngRoute' ] ).
config([
    '$routeProvider',
    function($routeProvider)
    {
      
        $routeProvider.
        when('/users', {
          templateUrl: 'templates/users.html',
          controller: 'UsersCtrl'
        }).
        when('/repos', {
          templateUrl: 'templates/repos.html',
          controller: 'ReposCtrl'
        }).
        otherwise({
          redirectTo: '/users'
        })
        ;
    }
  ])
;
