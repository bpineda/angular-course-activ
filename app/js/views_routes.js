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
controller(
    'ViewsController',
    function($scope)
    {
      $scope.name = 'Gerardo';
      console.log('Loading Views Controller');
    }
  ).
controller(
    'ControllerController',
    function($scope)
    {
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