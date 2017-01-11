"use strict";

var app = angular.module("fetchApp", ["ngRoute"]);

app.controller("Default", function ($scope, requestService) {
  $scope.message = 'hello';
});

app.service('requestService', function ($http) {
  this.get = (url) => $http.get(url);
});