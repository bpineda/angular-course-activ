'use strict';

angular.module('myApp')

.controller('UsersListCtrl', [ '$scope',
                                '$http',
                                'User',
                              function( $scope, $http, User ) 
                              {

                                console.log('UsersCtrl');
                                console.log(User.test);
                                $scope.users = null;
                                
                                $scope.users_list = function()
                                {
                                  User.get_users()
                                    .success( function(data)
                                              {
                                                console.log(data);
                                                $scope.users = data.users;
                                              });
                                }

                                $scope.users_list();

                                $scope.delete = function(id)
                                                {
                                                    User.destroy(id)
                                                        .success( function()
                                                                  {
                                                                      console.log('deleting');
                                                                      $scope.users_list();
                                                                  });
                                                };

                              }
                              ]);