;
(function() {
    angular.module('fetchApp').service('requestService', function($http) {
        // .get(url);
        this.call = (url, method) => $http({
            method: method,
            url: url
        });
    });
})();