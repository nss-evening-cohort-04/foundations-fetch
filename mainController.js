;
(function() {

  angular.module('fetchApp').controller('MainController', function($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "https://www.espn.com";

    $scope.fetch = () => {
      var sendDate = (new Date()).getTime();
      requestService.processUrl($scope.url, $scope.selectMethod).then((success) => {
        const response = new Response(success, sendDate);
        $scope.responses.push(response);
        var size = Object.keys($scope.responses).length;
        // console.log("Get response in main controller", response);
        // console.log("$scope.responses in MainController", $scope.responses);
      }, (error) => {
        debugger;
      });

    };
  });
})();