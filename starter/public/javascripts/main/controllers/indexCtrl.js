
var h3Framework = angular.module('h3Framework')

.controller('indexCtrl', ['$http', '$window', '$h3Account', function ($http, $window, $h3Account) {
	var $index = this;

	$index.init = function(){
		$index.userData = $h3Account.getUserData();
		$index.title = $('title').text();
	}

	$index.doLogin = function(){
		$('#modal-login').modal('hide');
		var data = {
			login: $index.loginData.userID,
			password: $index.loginData.userPW
		};
		$h3Account.login(data).then(function (res){
			$index.errMsgs = $h3Account.validation(res.data);
			if($index.errMsgs.length > 0){ $('#modal-warning').modal('show'); }
			else { $h3Account.refresh(); }
		}, function (err){
			console.log(err);
		});
	};

	$index.doLogout = function(){ $h3Account.logout(); };


	// SMS Message Tool
	$index.SMS = function(){
		console.log('SMS BTN CLICKED');
		$http.get('/mainCtrls/sms').then(function (res){
			console.log(res);
		});
	};

	$index.toAdmin = function(){
		$window.location = '/admin';
	};

	$index.init();

}]);
