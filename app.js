;(function(){
	var app = angular.module("BackendApp", []);
	app.controller('MainController', function($scope, requestService, Response){
		$scope.responses = [];
		$scope.httpMethods = ["GET", "POST", "OPTIONS", "HEAD"];
		// $scope.url = "http://httpstat.us/200";
    // $scope.url = "https://nss-responsecodes.herokuapp.com/docs";
		$scope.fetch = () => {
			var ajaxStartTime= Date.now();
			requestService[$scope.selectedMethod.toLowerCase()]($scope.url).then(success => {
				var response = {};
				response = new Response(success);
				var ajaxEndTime= Date.now();
				response.url = $scope.url;
				response.method = $scope.selectedMethod;
				response.time = ajaxEndTime - ajaxStartTime;;
				$scope.responses.push(response);
				// debugger;
			}, error => {
				debugger;
			});
		};
	});
	app.service('requestService', function($http){
		this.get = (url)	=> $http.get(url);
		this.post = (url)	=> $http.post(url);
		this.options = (url)	=> $http({
        method:'OPTIONS',
        url: url
    });
		this.head = (url)	=> $http.head(url);
	});

	app.factory('Response', function(){
		var Response = function (responseData){
			// this.statusCode = responseData.status;
			this.contentType = responseData.headers('Content-Type');
		};
		return Response;
	});

})();



