;(function(){
    angular.module("fetchApp").controller("MainController", function ($scope, requestService, Response){
        $scope.responses = [];
        $scope.url = "http://httpstat.us/200";



        $scope.fetch = () => {
            const initialDate = (new Date()).getTime();
          if ($scope.methods == 'GET') {
            console.log('method calls', $scope.methods)
              requestService.get($scope.url).then((success) => {
                const receivedDate = (new Date()).getTime();
                const response = new Response(success);
                const responseTime = receivedDate - initialDate;
                response.responseTime = responseTime;
                $scope.responses.push(response);
                console.log($scope.methods)
            }, (error) => {
                // debugger
                //something else
            })
          } else if ($scope.methods == 'POST'){
            requestService.post($scope.url).then((success) => {
                const receivedDate = (new Date()).getTime();
                const response = new Response(success);
                const responseTime = receivedDate - initialDate;
                response.responseTime = responseTime;
                $scope.responses.push(response);
                console.log($scope.methods)
            }, (error) => {
                // debugger
                //something else
            })
          } else if ($scope.methods == 'OPTIONS') {
            // requestService.options($scope.url).then((success) => {
                // const receivedDate = (new Date()).getTime();
                // const response = new Response(success);
                // const responseTime = receivedDate - initialDate;
                // response.responseTime = responseTime;
            //     $scope.responses.push(response);
             //     console.log($scope.methods)
            // // }, (error) => {
            // //     debugger
            // //     something else
            // })
          } else if ($scope.methods = 'HEAD') {
            requestService.head($scope.url).then((success) => {
                const receivedDate = (new Date()).getTime();
                const response = new Response(success);
                const responseTime = receivedDate - initialDate;
                response.responseTime = responseTime;
                $scope.responses.push(response);
                console.log($scope.methods)
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