'use strict'
angular.module('myApp').controller 'UsersCtrl', [
  '$scope'
  ($scope) ->

    $scope.showAlert = ->
      alert 'You clicked'

    console.log 'UsersCtrl'
    $scope.user_name = null

    $scope.load_data = ->
      $scope.technologies = [
        'HTML'
        'HTML5'
        'Javascript'
        'jQuery'
        'Angular'
        'C#'
        'PHP'
        'Ruby'
        'Mongo'
        'Expression'
        'Node'
        'Java'
        'Ruby on Rails'
        'Sinatra'
        'Cuba'
        'Padrino'
        'Lotus'
        'CodeIgniter'
        'Laravel'
        'Symfony'
        'Cake'

      ]

    return
]