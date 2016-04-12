//console.log('Archivo cargado');


var myApp = angular.module("myApp", ['ngRoute'] ).
config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider,$locationProvider)
    {
      
        $routeProvider.
        when('/', {
          templateUrl: 'templates/index_view.html',
          controller: 'IndexController'
        }).
        when('/controllers', {
          templateUrl: 'templates/controllers_view.html',
          controller: 'ControllerController'
        }).
        when('/views', {
          templateUrl: 'templates/views_view.html',
          controller: 'ViewsController'
        }).
        otherwise({
          redirectTo: '/'
        })
        ;
    }
  ]).
service(
                      'gitHubService',
                      function()
                      {
                        this.name = 'Nombre';
                        this.sayHello = function()
                        {
                          return "Hello " + this.name;
                        }
                      }
        ).
controller(
    'ViewsController',
    function( $scope,
                          gitHubService
                          
                         )
                        {
                          console.log('Loading MyCtrl');
                          console.log( gitHubService.sayHello() );
                          console.log( gitHubService.name );
                          gitHubService.name = 'Raymundo';
                          console.log( gitHubService.name );
                          $scope.name = 'brr';
                          //$scope.hellos = 'Greetings';
                          /*$scope.hellos = [
                              helloWorldFromService.sayHello(),
                              helloWorldFromFactory.sayHello(),
                              helloWorldFromProvider.sayHello()
                          ];*/
                          $scope.showAlert = function()
                          {

                          }

                        }
  ).
controller(
    'ControllerController',
    function($scope, gitHubService)
    {
      //console.log();
      $scope.name = 'José';
      console.log('Loading Controller Controller');
      $scope.articles = [{name: 'Article1'},{name:'Article2'},{name:'Article3'}];
      $scope.greet = function()
      {
        alert(123);
      }
    }
  ).
controller(
    'IndexController',
    function($scope)
    {
      $scope.name = 'Francisco';
      console.log('Loading Index Controller');
    }
  )
;
;


/*myApp.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider,$locationProvider)
    {
      alert(1);
      $locationProvider.html5Mode(false);
      $locationProvider.hashPrefix('');
        $routeProvider.
        when('/', {
          templateUrl: 'templates/index_view.html',
          controller: 'IndexController'
        }).
        when('/controllers', {
          templateUrl: 'templates/controllers_view.html',
          controller: 'ControllerController'
        }).
        when('/views', {
          templateUrl: 'templates/views_view.html',
          controller: 'ViewsController'
        }).
        otherwise({
          redirectTo: '/'
        })
        ;
    }
  ]);*/