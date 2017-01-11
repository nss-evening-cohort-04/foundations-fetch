;(function(){
	const app = angular.module("myApp", []);
	

	app.controller('MainController', function($scope, requestService, Response) {
		$scope.responses = [];
		$scope.url = "http://httpstat.us/200"

		$scope.fetch = function() {};
		requestService.get($scope.url).then(success => {
			const response = new Response(success);
			$scope.responses.push(response)
		}, error => {
			//do something else
		})
	});

	app.service('requestService', function($http) {
		this.get = (url) => $http.get(url);
	});

	app.factory('Response', function(){
		const Response = function(responseData) {
			this.statusCode = responseData.status;
		};
		return Response;
	});
})();

