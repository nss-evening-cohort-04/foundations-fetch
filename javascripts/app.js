"use strict";

var app = angular.module("fetchApp", []);

app.controller("MainController", function ($scope, requestService, Response) {
  $scope.responses = [];
  $scope.url = "http://httpstat.us/200";

  $scope.fetch = () => {
    requestService.get($scope.url).then((success) => {
      const response = new Response(success);
      $scope.responses.push(response);
    }, (error) => {
      // do something
    });
  };
});

app.service('requestService', function ($http) {
  this.get = (url) => $http.get(url);
});

app.factory('Response', function () {
  const Response = function (responseData) {
    this.statusCode = responseData.status;
  };

  return Response;
});