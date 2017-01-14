;(function(){
    angular.module("fetchApp").controller("MainController", function ($scope, requestService, Response){
        $scope.yourMom = false;

        $scope.test = function(){
          $scope.yourMom = true;
        };

        $scope.responses = [];
        $scope.url = "http://httpstat.us/200";
        $scope.fetch = () => {
          if ($scope.testicles == 'GET') {
            console.log('scope dot balls', $scope.testicles)
              requestService.get($scope.url).then((success) => {
                const response = new Response(success);
                $scope.responses.push(response);
                console.log($scope.testicles)
            }, (error) => {
                // debugger
                //something else
            })
          } else if ($scope.testicles == 'POST'){
            requestService.post($scope.url).then((success) => {
                const response = new Response(success);
                $scope.responses.push(response);
                console.log($scope.testicles)
            }, (error) => {
                // debugger
                //something else
            })
          } else if ($scope.testicles == 'OPTIONS') {
            // requestService.options($scope.url).then((success) => {
            //     const response = new Response(success);
            //     $scope.responses.push(response);
             //     console.log($scope.testicles)
            // // }, (error) => {
            // //     debugger
            // //     something else
            // })
          } else if ($scope.testicles = 'HEAD') {
            requestService.head($scope.url).then((success) => {
                const response = new Response(success);
                $scope.responses.push(response);
                console.log($scope.testicles)
            }, (error) => {
                // debugger
                //something else
            })
          } else {
            console.log('danger, will robinson');
          }
        };
    });
})();