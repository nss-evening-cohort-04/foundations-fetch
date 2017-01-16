;
(function() {
  angular.module('fetchApp').service('requestService', function($http) {
    this.processUrl = (url, method, data) => $http({
      method: method,
      url: url
    });
  });
})();