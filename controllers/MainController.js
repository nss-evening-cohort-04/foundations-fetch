// ;(function(){
// 	angular.module("fetchApp").controller("MainController", function ($scope, requestService, Response, $http){

// 		$scope.url = "http://httpstat.us/200"; //just so you don't have to keep typing it
// 		$scope.responses = [];
// 		$scope.logTime = [];

// 		$scope.fetch = () => {
// 			const startTime = new Date().getTime();
// 			$http({method: $scope.method}).then((success) => {
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

(function(angular) {
  'use strict';
angular.module('fetchApp', []).controller('MainController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'http://httpstat.us/200';

      $scope.fetch = function() {
        $scope.code = null;
        $scope.responses = [];

        $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
          then(function(success) {
          	const response = new Response(success);
            $scope.statusCode = response.status;
            $scope.data = response.data;
            $scope.responses.push(response);
          }, function(error) {
            $scope.data = error.data || 'Request failed';
            $scope.status = error.status;
        });
      };

    
    }]);
})(window.angular)