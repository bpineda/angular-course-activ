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
        var controller = $controller('UsersListCtrl',{ $scope: $scope });


        console.log($scope.users);
        $scope.users_list();

      })
      );

    it(
        'should capitalize first letter',
        inject(
            function(capitalize_firstFilter)
            {
                var capitalized = capitalize_firstFilter('raymundo');
                console.log(capitalized);
                //expect(  );
                //expect( capitalize_firstFilter('raymundo').toBe('Raymundo') );
                expect(capitalize_firstFilter('raymundo')).toEqual('Raymundo');
                expect(capitalize_firstFilter('rAYMUNDO eSPINOS')).toEqual('Raymundo Espinos');
                expect(capitalize_firstFilter('1AYMUNDO eSPINOS')).toEqual('1aymundo Espinos');
                expect(capitalize_firstFilter(' raymundo')).toEqual(' Raymundo');
            }
          )
      );

    /*it('should ....', inject(function($controller) {
      //spec body
      console.log('Probando');
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
      var nombre = 'Bernardo';
      expect(nombre).toEqual('Bernardo');
      var name_uppercase = angular.uppercase(nombre);
      expect(name_uppercase).toEqual('BERNARDO');
    }));*/

  });
});