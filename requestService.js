;(function () {
  angular.module('fetchApp').service('requestService', function ($http) {
    this.get = (url) => $http.get(url); //this is the ajax call
    this.post = (url) => $http.post(url);
    this.options = (url) => $http.options(url);
    this.head = (url) => $http.head(url);
  });
})();
