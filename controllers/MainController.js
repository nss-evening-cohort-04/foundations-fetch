;(function(){
	angular.module("fetchApp").controller("MainController", function ($scope, requestService, Response){
		$scope.responses = [];
		$scope.url = "http://httpstat.us/200";
		$scope.logTime = [];

		$scope.fetch = () => {
			const startTime = new Date().getTime();
			requestService.get($scope.url).then((success) => {
				const response = new Response(success);
				const endTime = new Date().getTime();
				const time = ((endTime - startTime)/1000);
				$scope.responses.push(response);
				$scope.logTime.push(time);
			}, (error) => {
				// debugger
				//something else
			})
		};
	});
})();