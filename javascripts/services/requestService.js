(function() {
  angular.module("myApp").service("requestService", function($http) {
    this.get = (url) => $http.get(url);
  });
})();
