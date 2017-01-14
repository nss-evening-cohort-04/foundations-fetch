;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url;// = "http://httpstat.us/200";
    $scope.httpMethods = ["GET", "POST", "OPTIONS", "HEAD"];

    $scope.fetch = () => {
      //right now fetch is always just "get" -- does if/else go here?
      requestService.get($scope.url).then((success) => {
        const response = new Response(success);
        $scope.responses.push(response);
      }, (error) => {
        //do something else
      });
    };

  });
})();

