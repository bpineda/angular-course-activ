angular.module('userService',[])

.factory( 'User', 
          function($http)
          {
            return {
              test: 123,
              get_users: function()
              {
                return $http.get('/api/index.php/users');
              },
              get: function(id)
              {
                return $http.get('/api/index.php/users/details/' + id);
              },

              update: function(id,attributeData)
                      {
                          return $http({
                            method: 'POST',
                            url: '/api/index.php/users/update/' + id,
                            headers: {'Content-type' : 'application/x-www-form-urlencoded'},
                            data: $.param(attributeData)
                          });
                      },
                create: function(attributeData)
                      {
                          return $http({
                            method: 'PUT',
                            url: '/api/index.php/users',
                            headers: {'Content-type' : 'application/x-www-form-urlencoded'},
                            data: $.param(attributeData)
                          });
                      },
                destroy: function(id)
                      {
                          return $http({
                            method: 'POST',
                            url: '/api/index.php/users/destroy/' + id,
                            headers: {'Content-type' : 'application/x-www-form-urlencoded'},
                            data: {}
                          });
                      }

              }
          }
);