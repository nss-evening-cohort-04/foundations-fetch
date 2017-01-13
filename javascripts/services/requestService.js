(function() {
  angular.module("myApp").service("requestService", function($http) {
    this.get = (url) => $http.get(url);
    this.post = (url) => $http.post(url);
    this.head = (url) => $http.head(url);
  });
})();
