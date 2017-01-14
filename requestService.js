;(function () {
  angular.module('fetchApp').service('requestService', function ($http) {
    this.get = (url) => $http.get(url);
    this.head = (url) => $http.head(url);
    this.options = (url) => $http.options(url);
    this.post = (url) => $http.post(url);
  });
})();