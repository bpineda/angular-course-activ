'use strict';

angular.module('myApp')

.controller('UsersDetailsCtrl', [ '$scope',
                                '$http',
                                '$location',
                                '$routeParams',
                                'User',
                              function( $scope, $http, $location, $routeParams, User ) 
                              {

                                console.log('UsersDetailsCtrl');
                                console.log(User.test);
                                $scope.user = null;
                                $scope.users = null;

                                $scope.user_details = function()
                                {
                                    User.get($routeParams.id)
                                        .success( function(data)
                                                  {
                                                    console.log(data);
                                                    $scope.user = data;
                                                  }
                                          );
                                };

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

                                $scope.user_details();

                                $scope.save = function()
                                                {
                                                    User.update($routeParams.id, $scope.user)
                                                        .success( function(data)
                                                                  {
                                                                      console.log(data);
                                                                      $location.path('/users');
                                                                  }
                                                          );
                                                };

                                $scope.cancel = function()
                                                {
                                                    $location.path('/users');
                                                };
                                
                                

                              }
                              ]);