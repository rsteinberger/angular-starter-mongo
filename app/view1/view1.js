'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

	$scope.desktop = "Desktop A";
	$scope.list = [];

	$scope.selectRegions = function(regions) {
		$http.get("http://localhost:3000/regions")
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = "REGIONS";
			$scope.showRegions = true;
			$scope.showCountries = false;
			$scope.showCountry = false;
		});
	}

	$scope.selectRegions();

	$scope.selectRegion = function(region) {
		$http.get("http://localhost:3000/region/?id=" + region._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = region.name;
			$scope.showRegions = false;
			$scope.showCountries = true;
			$scope.showCountry = false;
		});
	}

	$scope.selectCountry = function(country) {
		$http.get("http://localhost:3000/country/?id=" + country._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = country.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showCountry = true;
		});
	}


}]);






