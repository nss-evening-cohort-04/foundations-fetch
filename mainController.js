;(function () {

  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
		$scope.responses = [];
		$scope.url = "https://www.espn.com";

	$scope.fetch = ()=>{
			switch($scope.selectMethod){
				case 'GET':
					var sendDate = (new Date()).getTime();
					requestService.get($scope.url).then((success) =>{
					var receiveDate = (new Date()).getTime();
					const response = new Response(success);
					console.log("Get response in main controller", response );
        			var responseTimeMs = receiveDate - sendDate;
					$scope.responses.push(responseTimeMs);
					$scope.responses.push(response);
					var size = Object.keys($scope.responses).length;
					console.log("size",size );
					console.log("$scope.responses in MainController",$scope.responses );
					}, (error) =>{
						debugger;
					});
				break;

				case 'POST':
					var sendDate = (new Date()).getTime();
					requestService.post($scope.url).then((success) =>{
					var receiveDate = (new Date()).getTime();
					const response = new Response(success);
        			var responseTimeMs = receiveDate - sendDate;
					$scope.responses.push(responseTimeMs);
					// $scope.responses.splice(0, 1, responseTimeMs);
					$scope.responses.push(response);
					// console.log("$scope.selectMethod",$scope.selectMethod );
					console.log("Post response in main controller", response );
        			console.log("Post responseTimeMs",responseTimeMs );
					}, (error) =>{
						debugger;
					});
				break;				

				case 'OPTIONS':
					var sendDate = (new Date()).getTime();
					requestService.options($scope.url).then((success) =>{
					const response = new Response(success);
					$scope.responses.push(response);
					console.log("Options response in main controller", response );
					var receiveDate = (new Date()).getTime();
        			var responseTimeMs = receiveDate - sendDate;
        			console.log("Options responseTimeMs",responseTimeMs );
					}, (error) =>{
						debugger;
					});
				break;

				case 'HEAD':
					var sendDate = (new Date()).getTime();
					requestService.head($scope.url).then((success) =>{
					const response = new Response(success);
					$scope.responses.push(response);
					console.log("Head response in main controller", response );
					var receiveDate = (new Date()).getTime();
        			var responseTimeMs = receiveDate - sendDate;
        			console.log("Head responseTimeMs",responseTimeMs );
					}, (error) =>{
						debugger;
					});
			}
		};
	});
})();