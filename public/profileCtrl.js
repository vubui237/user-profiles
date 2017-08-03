angular.module('userProfiles')
.controller('profileCtrl', function( $scope,friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	$scope.getFriends = friendService.getFriends().then(function(response) {
		let kitkats = response.data;
		//console.log(kitkats);
		$scope.currentUser = kitkats.currentUser;
		$scope.friends = kitkats.friends;
		
	})



});