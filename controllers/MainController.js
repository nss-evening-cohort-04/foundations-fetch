// ;(function(){
// 	angular.module("fetchApp").controller("MainController", function ($scope, requestService, Response, $http){

// 		$scope.url = "http://httpstat.us/200"; //just so you don't have to keep typing it
// 		$scope.responses = [];
// 		$scope.logTime = [];

// 		$scope.fetch = () => {
// 			const startTime = new Date().getTime();
// 			requestService.get($scope.url).then((success) => {
// 				const response = new Response(success);
// 				const endTime = new Date().getTime();
// 				const time = ((endTime - startTime)/1000);
// 				$scope.responses.push(response);
// 				$scope.logTime.push(time);
// 			}, (error) => {
// 				console.log("an error occured");
// 			});
// 		};
// 		});
// })();

// Trying to solve the problem of selecting the method option
;(function(angular) {
	'use strict';
	angular.module('fetchApp', []).controller('MainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
        $scope.url = 'http://httpstat.us/200';
    	$scope.responses = [];

        $scope.fetch = function() {
        	// $scope.code = null;
       		$http({method: $scope.method, url: $scope.url, cache: $templateCache}).then(function(success) {
          		const response = new Response(success);
           		$scope.responses.push(response);
          }, function(error) {
          	console.log("an error occured");
        });
      };    
    }]);
})(window.angular);