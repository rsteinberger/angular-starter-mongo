'use strict';

angular.module('myApp.nav', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nav', {
    templateUrl: 'nav/nav.html',
    controller: 'NavCtrl'
  });
}])

.controller('NavCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

	$scope.list = [];

	$("#com").removeClass("selected");
	$("#nav").addClass("selected");
	$("#prx").removeClass("selected");
	$("#a").removeClass("selected");
	$("#b").removeClass("selected");
	$("#c").removeClass("selected");

	$scope.selectRegions = function(regions) {
		$http.get("http://localhost:3000/regions")
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = "REGIONS";
			$scope.showRegions = true;
			$scope.showCountries = false;
			$scope.showStates = false;
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
			$scope.showStates = false;
		});
	}

	$scope.selectCountry = function(country) {
		$http.get("http://localhost:3000/country/?id=" + country._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = country.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = true;
		});
	}


}]);





