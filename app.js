;(function () {
  const app = angular.module('fetchApp', []);

  debugger

  app.controller('MainController', function($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";

    $scope.fetch = () => {
      requestService.get($scope.url).then((success) => {
        const response = new Response(success);
        $scope.responses.push({ response });
      }, (error) => {
        debugger
        //do something else
      }); //don't forget to prefix with $scope
    };
  });

  app.service('requestService', function($http) {
    this.get = (url) => $http.get(url);
  });

  app.factory('Response', function () {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
    };

    return Response;
  });
})();