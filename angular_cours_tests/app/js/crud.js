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

/*angular.module('myApp').
  filter('capitalize_first', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
  });*/

var myApp = angular.module('myApp'); 
myApp.filter( 'capitalize_first',
              function() 
              {
                return  function(input) 
                        {
                          input = input.toLowerCase();
                          return (!!input) ? input.replace(/(?:^|\s)\S/g, 
                            function(a) 
                            {

                              return a.toUpperCase();

                            }): '';
                } 
              });