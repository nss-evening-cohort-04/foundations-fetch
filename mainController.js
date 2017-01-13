;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";
    
    $scope.fetch = () => {
      if ($scope.pickOne == 'GET') {
        //console.log("git some", $scope.pickOne)
        requestService.get($scope.url).then((success) => {
          const response = new Response(success);
          $scope.responses.push(response);
          //console.log("git it again", $scope.pickOne)
        }, (error) => {
          //debugger
          //do something else
        })
      } else if ($scope.pickOne == 'POST') {
        requestService.post($scope.url).then((success) => {
          const response = new Response(success);
          $scope.responses.push(response);
         // console.log("post?", $scope.pickOne)
        }, (error) => {
          //debugger
          //do another thing
        })
      } else if ($scope.pickOne == 'OPTIONS') {
        //requestService.options($scope.url).then((success) => {
        // const response = new Response(success);
        //$scope.responses.push(response);
       //  console.log("optional", $scope.pickOne)
       // }, (error) => {
          //debugger
          //do yet another thing
       // })
      } else if ($scope.pickOne == 'HEAD') {
        requestService.head($scope.url).then((success) => {
          const response = new Response(success);
          $scope.responses.push(response);
         // console.log("head lololol", $scope.url)
        }, (error) => {
          //debugger
          //you're a Thing
        })
      } else{
        console.log("you done broke somethin'")
      }
    };
  });
})();
