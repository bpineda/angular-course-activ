'use strict';

angular.module('myApp')

.controller('UsersCtrl', [ '$scope',
                                
                              function( $scope ) 
                              {

                                console.log('UsersCtrl'); 
                                $scope.user_name = null;                               
                                
                              }
                              ]);