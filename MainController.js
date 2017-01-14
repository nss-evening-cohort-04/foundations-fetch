;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";
    


    $scope.fetch = () => {
    const initialDate = (new Date()).getTime();
      if($scope.method == "GET"){
        requestService.get($scope.url).then((success) => {
          const receiveDate = (new Date()).getTime(); 
          const response = new Response(success);
          const responseTime = receiveDate - initialDate;
          response.responseTime = responseTime;
          console.log(responseTime);
          $scope.responses.push(response);
        }, (error) => {
          debugger
        });
      } else if($scope.method == "POST"){
        requestService.post($scope.url).then((success) => {
          const receiveDate = (new Date()).getTime(); 
          const response = new Response(success);
          const responseTime = receiveDate - initialDate;
          response.responseTime = responseTime;
          $scope.responses.push(response);
        }, (error) => {
          debugger
        });
      } else if($scope.method == "HEAD"){
        requestService.head($scope.url).then((success) => {
          const receiveDate = (new Date()).getTime(); 
          const response = new Response(success);
          const responseTime = receiveDate - initialDate;
          response.responseTime = responseTime;
          $scope.responses.push(response);
        }, (error) => {
          debugger
        });
      } else if($scope.method == "OPTIONS"){
        requestService.options($scope.url).then((success) => {
          const receiveDate = (new Date()).getTime(); 
          const response = new Response(success);
          const responseTime = receiveDate - initialDate;
          response.responseTime = responseTime;
          $scope.responses.push(response);
        }, (error) => {
          debugger
        });
      }
    };



  });
})();