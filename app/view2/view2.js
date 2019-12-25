'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

	$scope.listHeader = "REGIONS";
	$scope.list = [];


	$http.get("http://localhost:3000/regions")
		.then(function(response) {
			// console.log(response);
			// console.log(JSON.stringify(response));
			$scope.list = response.data;
	});

	$scope.selectRegion = function(region) {
		console.log(JSON.stringify(region));

		$http.get("http://localhost:3000/region/?id=" + region._id)
			.then(function(response) {
				console.log(JSON.stringify(response));
			$scope.list = response.data;
			$scope.listHeader = region.name;
		});

	}

	// $http.get("http://localhost:3000/q1")
	// 	.then(function(response) {
	// 		console.log(response);
	// 		console.log(JSON.stringify(response));
	// 		// $scope.myWelcome = response.data;
	// });










}]);


