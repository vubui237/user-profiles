angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      return $http({
        method: "POST",
        url: '/api/login',
        data: {
          name: user.name,
          password: user.password
        }
      }).then(function(response) {
        console.log(response);
        return response;
      })
    }

    this.getFriends = function() {
    	return $http.get('/api/profiles').then(function(response) {
        console.log(response);
        return response;
      })
    };
  
});
