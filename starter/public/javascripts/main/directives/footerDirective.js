
var h3Framework = angular.module('h3Framework')

.directive('footerCustom', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/main/common/footer.html',
		controller: 'footCtrl',
		controllerAs: 'foot'
	};
});
