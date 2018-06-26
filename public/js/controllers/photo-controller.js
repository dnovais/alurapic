angular.module('alurapic').controller('PhotoController', function ($scope, $http) {
	$scope.photo = {};

	$scope.submit = function(){
		console.log($scope.photo)
	}
})