;(function () {
	angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {

		$scope.responses = [];
		$scope.showPostForm = false;
		$scope.url = "http://httpstat.us/";

		$scope.fetch = () => {
			
			const initialDate = (new Date()).getTime();
			
			if ($scope.method == "get") {
				requestService.get($scope.url).then((success) => {
					const receivedDate = (new Date()).getTime();
					const response = new Response(success);
					const responseTime = receivedDate - initialDate;
					response.responseTime = responseTime;
					$scope.responses.push(response);
				}, (error) => {
					debugger
				//do something else
			});
			} else if ($scope.method == "post"){
				requestService.post($scope.url).then((success) => {
					const receivedDate = (new Date()).getTime();
					const response = new Response(success);
					const responseTime = receivedDate - initialDate;
					response.responseTime = responseTime;
					$scope.responses.push(response);
				}, (error) => {
					// debugger
				//do something else
			});
			} else if ($scope.method == "head"){
				requestService.head($scope.url).then((success) => {
					const receivedDate = (new Date()).getTime();
					const response = new Response(success);
					const responseTime = receivedDate - initialDate;
					response.responseTime = responseTime;
					$scope.responses.push(response);
				}, (error) => {
					debugger
				//do something else
			});
			} else if ($scope.method == "options"){
				requestService.options($scope.url).then((success) => {
					const receivedDate = (new Date()).getTime();
					const response = new Response(success);
					const responseTime = receivedDate - initialDate;
					response.responseTime = responseTime;
					$scope.responses.push(response);
				}, (error) => {
					debugger
				//do something else
			});
			}
		};

		$scope.checkPost = ()=>{
			if ($scope.method == "post"){
			$scope.showPostForm = true;
			}
		};

	});
})();