"use strict";

var app = angular.module("fetchApp", []);


app.controller("Default", function ($scope, requestService) {
  $scope.fetch = () => {
    requestService.get($scope.url).then(success => {
      // do something
    }, error => {
      // do something
    });
  };
});

app.service('requestService', function ($http) {
  this.get = (url) => $http.get(url);
});