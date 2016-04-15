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
              otherwise({
                redirectTo: '/users'
              })
              ;
          }
  ])
;

angular.module('myApp')

.controller('UsersCtrl', [ '$scope',
                                
                              function( $scope ) 
                              {

                                console.log('UsersCtrl'); 
                                $scope.user_name = null;                               
                                
                              }
                              ]);