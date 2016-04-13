var myApp = angular.module("myApp", ['ngRoute'] ).
config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider,$locationProvider)
    {
      
        $routeProvider.
        when('/logged', {
          templateUrl: 'templates/index_logged.html',
          controller: 'UserController'
        }).
        when('/guest', {
          templateUrl: 'templates/index_guest.html',
          controller: 'GuestController'
        }).
        when('/login', {
          templateUrl: 'templates/login.html',
          controller: 'LoginController'
        }).
        when('/logout', {
          templateUrl: 'templates/login.html',
          controller: function($scope, $location, Login)
          {
            Login.is_logged = false;
            $location.path('/login');
          }
          
        }).
        otherwise({
          redirectTo: '/guest'
        })
        ;
    }
  ]).
  factory(
            'Login',
            function()
            {
              return {
                is_logged: false,
                authenticate: function(user)
                {
                  console.log(user.name);
                  if(user.name == 'bpineda' && user.password == '12345678')
                  {
                    return true;
                  }

                  return false;

                }
              }
            }
    ).
  controller( 'LoginController',
              function($scope, Login, $location)
              {
                console.log('Login Controller');
                $scope.user = {name:'', password:''};

                $scope.authenticate = function()
                {
                  console.log($scope.user);
                  if( Login.authenticate($scope.user) )
                  {
                    Login.is_logged = true;
                    $location.path('/logged');
                    return true;
                  }

                  alert('Check your data');
                  
                }; 
              }
    ).
  controller( 'GuestController',
              function($scope, Login)
              {
                console.log( 'Guest Controller' );
                console.log( Login.is_logged );
                console.log( Login.authenticate() );
              }
    ).
  controller( 'UserController',
              function($scope, Login, $location)
              {
                console.log('User Controller');
                if(!Login.is_logged)
                {
                  $location.path('/login');
                }
              }
    )
;