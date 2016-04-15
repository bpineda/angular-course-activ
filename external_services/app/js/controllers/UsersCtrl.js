'use strict';

angular.module('myApp')

.controller('UsersCtrl', [  '$scope',
                            '$http',
                            'GitHub',
                              function( $scope, $http, GitHub ) 
                              {

                                console.log('UsersCtrl');
                                console.log(GitHub.user_name);
                                $scope.user_name = GitHub.user_name;
                                $scope.get_github_data = function()
                                {
                                    GitHub.get_user_data($scope.user_name)
                                          .success(
                                              function(data)
                                              {
                                                  console.log(data);
                                                  $scope.user = data;
                                                  GitHub.repos_url = data.repos_url;
                                                  GitHub.user_name = data.login;
                                                  $scope.get_repos();
                                              }
                                            );
                                }

                                $scope.get_repos = function()
                                {
                                    GitHub.get_repos()
                                          .success( function(data)
                                                    {
                                                        console.log(data);
                                                        GitHub.repos = data;
                                                        console.log(data.login);
                                                    }
                                            );
                                }

                              }
                              ]);