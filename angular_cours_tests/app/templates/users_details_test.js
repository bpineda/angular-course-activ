'use strict';

describe('myApp.view1 module', function() {

  //beforeEach(module('myApp.view1'));
  beforeEach( module('myApp') );

  var $controller;

  beforeEach(inject(function(_$controller_)
    {
        $controller = _$controller_;
    }));

  describe('User controller', function(){

    it('Should inject the controller', 
      inject(function($controller){
        var $scope = {};
        var controller = $controller('UsersDetailsCtrl',{ $scope: $scope });

        console.log('Testing UserDetailsCtrl');
        //user.name
        //user.email
        $scope.user = { name: 'Francisco', email: 'fco@intellisys.com.mx' };
        $scope.save();

        //console.log($scope.users);
        $scope.users_list();
        console.log('Getting users');
        console.log($scope.users);

      })
      );

    

  });
});