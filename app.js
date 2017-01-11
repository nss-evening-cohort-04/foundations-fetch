;(function(){
	const app = angular.module('fetchApp', []);

	// debugger
	// http://httpstat.us/200

	app.controller('MainController', function($scope, requestService, Response) {
		$scope.responses = [];
		$scope.url = "http://httpstat.us/200";
		$scope.message = 'Foundation-Fetch';
		$scope.fetch = () => {
			requestService.get($scope.url).then(
				(success) =>{
					// debugger
					const response = new Response(success);
					$scope.responses.push(response);
				}, (error) =>{
					// debugger
					$scope.responses.push({statusCode: error.status});
				});
		};
	});

	app.service('requestService', function($http) {
		this.get = (url) => $http.get(url);
	});

	app.factory('Response', function (){
		const Response = function(responseData){
			this.statusCode = responseData.status;
		};

		return Response;
	});


})();