;(function () {
  const app = angular.module('fetchApp', []);

  debugger

  app.controller('MainController', function($scope, requestService) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";

    $scope.fetch = () => {
      requestService.get($scope.url).then((success) => {
        debugger
        $scope.responses.push({ statusCode: success.status });
      }, (error) => {
        debugger
        //do something else
      }); //don't forget to prefix with $scope
    };
  });

  app.service('requestService', function($http) {
    this.get = (url) => $http.get(url);
  });
})();