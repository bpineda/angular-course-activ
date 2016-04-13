'use strict';

angular.module('myApp')

.controller('UsersNewCtrl', [ '$scope',
                                '$http',
                                '$location',
                                '$routeParams',
                                'User',
                              function( $scope, $http, $location, $routeParams, User ) 
                              {

                                
                                  $scope.save = function()
                                                {
                                                    User.create($scope.user)
                                                        .success( function(data)
                                                                  {
                                                                      console.log(data);
                                                                      $location.path('/users');
                                                                  }
                                                          );
                                                        
                                                };
                                

                              }
                              ]);