;(function(){
	const app = angular.module('fetchApp', []);

	debugger

	app.controller('MainController', function($scope, requestService, Response){
		$scope.responses = [];
		$scope.url='http://httpstat.us/200';
		$scope.fetch = () => {
			requestService.get($scope.url).then((success) => {
				const response = new Response(success);
				debugger
				$scope.responses.push({statusCode: success.status});
			},(error) => {
				debugger
			});
		};
	});

	app.service('requestService', function($http){
		this.get = (url) => $http.get(url);
	});

	app.factory('Response', function(){
		const Response = function(ResponseData){
			this.statusCode = ResponseData.status;
		};
		return Response;
	});
})();