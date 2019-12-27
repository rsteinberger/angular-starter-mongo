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

	$("#com").removeClass("selected");
	$("#nav").removeClass("selected");
	$("#prx").removeClass("selected");


	$("#a").addClass("selected");
	$("#b").removeClass("selected");
	$("#c").removeClass("selected");


	var path = [];


	$scope.selectRegions = function(regions) {
		var state = {"select": "", "obj": {}};
		state.select = "selectRegions";
		state.obj = regions;
		path.push(state);
		$http.get("http://localhost:3000/regions")
			.then(function(response) {
				// console.log(JSON.stringify(response));
			$scope.list = response.data;
			$scope.listHeader = "REGIONS";
			$scope.showRegions = true;
			$scope.showCountries = false;
			$scope.showStates = false;
			$scope.showLocations = false;
		});
	}

	$scope.selectRegions();

	$scope.reset = function() {
		$scope.selectRegions();
	}
	$scope.back = function() {
		console.log(JSON.stringify(path.length));
		path.pop();
		console.log(JSON.stringify(path.length));

		var call = path[path.length - 1];
		$scope[call.select](call.obj, true);

	}

	$scope.selectRegion = function(region, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectRegion";
			state.obj = region;
			path.push(state);			
		}

		$http.get("http://localhost:3000/region/?id=" + region._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = region.name;
			$scope.showRegions = false;
			$scope.showCountries = true;
			$scope.showStates = false;
			$scope.showLocations = false;
		});
	}

	$scope.selectCountry = function(country, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectCountry";
			state.obj = country;
			path.push(state);			
		}

		$http.get("http://localhost:3000/country/?id=" + country._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = country.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = true;
			$scope.showLocations = false;
		});
	}

	$scope.selectProvince = function(province, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectProvince";
			state.obj = province;
			path.push(state);
		}

		$http.get("http://localhost:3000/province/?id=" + province._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = province.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = false;
			$scope.showLocations = true;
			$scope.showSites = false;
			$scope.showAreas = false;
			$scope.showCells = false;
			$scope.showSensors = false;
			$scope.showSensor = false;
		});
	}

	$scope.selectLocation = function(location, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectLocation";
			state.obj = location;
			path.push(state);
		}

		$http.get("http://localhost:3000/location/?id=" + location._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = "Sensor Sites in " + location.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = false;
			$scope.showLocations = false;
			$scope.showSites = true;
			$scope.showAreas = false;
			$scope.showCells = false;
			$scope.showSensors = false;
			$scope.showSensor = false;
		});
	}

	$scope.selectSite = function(site, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectSite";
			state.obj = site;
			path.push(state);
		}

		$http.get("http://localhost:3000/site/?id=" + site._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = "Site " + site.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = false;
			$scope.showLocations = false;
			$scope.showSites = false;
			$scope.showAreas = true;
			$scope.showCells = false;
			$scope.showSensors = false;
			$scope.showSensor = false;

		});
	}

	$scope.selectArea = function(area, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectArea";
			state.obj = area;
			path.push(state);
		}

		$http.get("http://localhost:3000/area/?id=" + area._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = "Sensor Areas in " + area.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = false;
			$scope.showLocations = false;
			$scope.showSites = false;
			$scope.showAreas = false;
			$scope.showCells = true;
			$scope.showSensors = false;
			$scope.showSensor = false;
		});
	}

	$scope.selectCell = function(cell, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectCell";
			state.obj = cell;
			path.push(state);			
		}

		$http.get("http://localhost:3000/cell/?id=" + cell._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = "Sensor Cells in Area " + cell.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = false;
			$scope.showLocations = false;
			$scope.showSites = false;
			$scope.showAreas = false;
			$scope.showCells = false;
			$scope.showSensors = true;
			$scope.showSensor = false;
		});
	}

	$scope.selectSensor = function(sensor, back) {
		if(!back) {
			var state = {"select": "", "obj": {}};
			state.select = "selectSensor";
			state.obj = sensor;
			path.push(state);			
		}

		$http.get("http://localhost:3000/sensor/?id=" + sensor._id)
			.then(function(response) {
			$scope.list = response.data;
			$scope.listHeader = "Sensor " + sensor.name;
			$scope.showRegions = false;
			$scope.showCountries = false;
			$scope.showStates = false;
			$scope.showLocations = false;
			$scope.showSites = false;
			$scope.showAreas = false;
			$scope.showCells = false;
			$scope.showSensors = false;
			$scope.showSensor = true;
		});
	}


}]);






