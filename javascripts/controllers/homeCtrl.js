(function() {
  angular.module("myApp").controller("homeCtrl", function($scope, requestService, Response) {

    $scope.url = "https://nss-responsecodes.herokuapp.com/200";

    $scope.fetch = () => {
      let timeRequestSent = Date.now();
      switch($scope.selectedMethod) {
        case "get":
          requestService.get($scope.url).then(success => {
            promiseSuccess(success);
          }, (error) => {
            promiseError();
          });
          break;
        case "post":
          requestService.post($scope.url).then(success => {
            promiseSuccess(success);
          }, (error) => {
            promiseError();
          });
          break;
        case "options":
          requestService.options($scope.url).then(success => {
            promiseSuccess(success);
          }, (error) => {
            promiseError();
          });
          break;
        case "head":
          requestService.head($scope.url).then(success => {
            promiseSuccess(success);
          }, (error) => {
            promiseError();
          });
          break;
        default:
          alert("Please select a method!");
      }
      function promiseSuccess(success) {
        const response = new Response(success);
        $scope.requestUrl = response.requestUrl;
        $scope.method = response.method;
        $scope.responseTime = response.timeRequestCompleted - timeRequestSent;
        $scope.contentSize = response.contentSize;
      };
      function promiseError() {
        alert("That URL cannot utilize that method!");
      };
    };
  });
})();
