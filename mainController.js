;
(function() {
    angular.module('fetchApp').controller('MainController', function($scope, requestService, Response) {
        $scope.responses = [];
        $scope.url = "http://httpstat.us/200";

        $scope.methods = ['get', 'options', 'post', 'head'];

        $scope.fetch = () => {
            var start_time = new Date().getTime();
            requestService.call($scope.url, $scope.method)
                .then((success) => {
                    console.log("response time = ", new Date().getTime() - start_time);
                    const response = new Response(success);
                    // push response to responses array
                    $scope.responses.push(response);
                    response.url = $scope.url;
                    response.response_time = new Date().getTime() - start_time;
                    // push response time to responses array
                    // let response_time = {
                    //     response_time: new Date().getTime() - start_time
                    // };
                    // add response_time to the responses array
                    // $scope.responses.push(response_time);
                    console.log("success = ", $scope.responses);
                }, (error) => {
                    debugger
                    //do something else
                });
        };
    });
})();