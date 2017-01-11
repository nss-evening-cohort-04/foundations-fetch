const myApp = angular.module("myApp", []);

debugger

myApp.controller("homeCtrl", function($scope, requestService, Response) {
  $scope.responses = [];
  $scope.url = "http://httpstat.us/200";

  $scope.fetch = () => {
    requestService.get($scope.url).then(success => {
      const response = new Response(success);
      $scope.responses.push(response);
    }, (error) => {
      debugger
      //do something else
    });
  };
});

myApp.service("requestService", function($http) {
  this.get = (url) => $http.get(url);
});

myApp.factory("Response", function() {
  const Response = function (responseData) {
    this.statusCode = responseData.status;
  };

  return Response;
});
