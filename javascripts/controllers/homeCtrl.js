myApp.controller("homeCtrl", function($scope, requestService) {
  $scope.fetch = () => {
    requestService.get($scope.url)
  };
});

myApp.service("requestService", function($http) {
  this.get = (url) => $http.get(url);
});
