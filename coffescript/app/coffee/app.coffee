#console.log 'Trying coffee'
#alert(123)

angular.module('myApp', [ 'ngRoute', 'ngAnimate' ]).config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider.when('/users',
      templateUrl: 'templates/users.html'
      controller: 'UsersCtrl').otherwise redirectTo: '/users'
    return
]