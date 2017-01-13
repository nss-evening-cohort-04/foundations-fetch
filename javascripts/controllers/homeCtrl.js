(function() {
  angular.module("myApp").controller("homeCtrl", function($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "https://nss-responsecodes.herokuapp.com/200";

    $scope.fetch = () => {
      console.log("$scope.selectedMethod", $scope.selectedMethod);
      let timeRequestSent = Date.now();
      requestService.get($scope.url).then(success => {
        let timeRequestCompleted = Date.now();
        let responseTime = timeRequestCompleted - timeRequestSent;
        const response = new Response(success);
        $scope.responses.push(response);
      }, (error) => {
        //do something else
      });
    };
  });
})();
