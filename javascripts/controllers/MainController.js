;(function() {
angular.module("fetchApp").controller("MainController", function ($scope, requestService, ResponseFactory) {
  $scope.userposting = false;
  $scope.responses = [];
  $scope.url = "http://httpstat.us/";
  $scope.fetch = () => {
    if($scope.method=="get") {
    const sendDate = (new Date()).getTime();
    requestService.get($scope.url).then(success => {
      const receiveDate = (new Date()).getTime();
      const response = new ResponseFactory(success);
      const responseTime = receiveDate - sendDate;
      response.responseTime = responseTime;
      $scope.responses.push(response);
      //do something
    }, error => {
      //do something else
    });
  } else if ($scope.method=="post") {
    const sendDate = (new Date()).getTime();
    requestService.post($scope.url).then(success => {
      const receiveDate = (new Date()).getTime();
      const response = new ResponseFactory(success);
      const responseTime = receiveDate - sendDate;
      response.responseTime = responseTime;
      $scope.responses.push(response);
      //do something
    }, error => {
      //do something else
    });
  } else if ($scope.method=="options") {
    const sendDate = (new Date()).getTime();
    requestService.options($scope.url).then(success => {
      const receiveDate = (new Date()).getTime();
      const response = new ResponseFactory(success);
      const responseTime = receiveDate - sendDate;
      response.responseTime = responseTime;
      $scope.responses.push(response);
      //do something
    }, error => {
      //do something else
    });
  } else if ($scope.method=="head") {
    const sendDate = (new Date()).getTime();
    requestService.head($scope.url).then(success => {
      const receiveDate = (new Date()).getTime();
      const response = new ResponseFactory(success);
      const responseTime = receiveDate - sendDate;
      response.responseTime = responseTime;
      $scope.responses.push(response);
      //do something
    }, error => {
      //do something else
    });
  }
  };

  $scope.postCheck = () => {
    if ($scope.method == "post") {
      $scope.userposting = true;
    }
    else $scope.userposting = false;
  }
});
})();