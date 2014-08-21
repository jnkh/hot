'use strict';

app.controller('FrontCtrl', function($scope) {
		$scope.arr = [];

		for ($scope.i = 0; $scope.i < 20; $scope.i ++) {
			$scope.arr.push($scope.i);
		}

		$scope.images = $scope.arr;


		$scope.addImage = function() {
			$scope.images.push(1);
		};

});