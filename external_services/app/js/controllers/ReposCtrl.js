'use strict';

angular.module('myApp')

.controller('ReposCtrl', [ '$scope',
                            'GitHub',
                              function( $scope, GitHub ) 
                              {

                                console.log('ReposCtrl'); 
                                $scope.repos = GitHub.repos;
                                

                              }
                              ]);