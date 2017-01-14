;
(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";
    $scope.selectedMethod = "GET";

    $scope.methods = ["POST", "GET", "HEAD", "OPTIONS"];

    $scope.fetch = () => {
      const start = new Date().getTime();
      switch ($scope.selectedMethod) {
        case "POST":
          requestService.post($scope.url).then((success) => {
            const end = new Date().getTime();
            const elapsed = end - start;
            const response = new Response(success, elapsed);
            $scope.responses.push(response);
          }, (error) => {
            debugger
            //do something else
          });
          break;
        case "GET":
          requestService.get($scope.url).then((success) => {
            const end = new Date().getTime();
            const elapsed = end - start;
            const response = new Response(success, elapsed);
            $scope.responses.push(response);
          }, (error) => {
            debugger
            //do something else
          });

          break;
        case "HEAD":
          requestService.head($scope.url).then((success) => {
            const end = new Date().getTime();
            const elapsed = end - start;
            const response = new Response(success, elapsed);
            $scope.responses.push(response);
          }, (error) => {
            debugger
            //do something else
          });

          break;
        case "OPTIONS":
          requestService.options($scope.url).then((success) => {
            const end = new Date().getTime();
            const elapsed = end - start;
            const response = new Response(success, elapsed);
            $scope.responses.push(response);
          }, (error) => {
            debugger
            //do something else
          });

          break;
      }
    };
  });
})();