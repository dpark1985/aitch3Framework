
var h3Framework = angular.module('h3Framework')

.controller('mainCtrl', ['$scope', '$location', '$h3Account', '$h3socket', function ($scope, $location, $h3Account, $h3socket) {
	// mainCtrl is a global controller.
	// every controllers can access to mainCtrl by $scope variable
	$h3Account.isUserLoggedIn().then(function (res){
		if(res.data.userID === null){
			$h3Account.setUserData({ loggedIn: false, userID: null });
		} else {
			$h3Account.setUserData({ loggedIn: true, userID: res.data.userID });
		}
	});



	$h3socket.setSocket(socket);

	$scope.titleText = "ABC";

	$scope.bodyStyle = {background: "rgb(255, 255, 255)"};


}]);
