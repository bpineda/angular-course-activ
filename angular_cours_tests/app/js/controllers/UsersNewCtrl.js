'use strict';

angular.module('myApp')

.controller('UsersNewCtrl', [ '$scope',
                                '$http',
                                '$location',
                                '$routeParams',
                                'User',
                              function( $scope, $http, $location, $routeParams, User ) 
                              {

                                  $scope.users_list = function()
                                {
                                  console.log('getting user list');
                                  User.get_users()
                                      .success( function(data)
                                              {
                                                console.log(data);
                                                $scope.users = data.users;
                                              });
                                }
                                  
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