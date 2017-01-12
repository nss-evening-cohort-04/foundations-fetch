;
(function() {
    angular.module('fetchApp').controller('MainController', function($scope, requestService, Response) {
        $scope.responses = [];
        $scope.failedresponses = [];
        $scope.url = "http://httpstat.us/200";

        $scope.methods = ['get', 'options', 'post', 'head'];

        $scope.fetch = () => {
            var start_time = new Date().getTime();
            requestService.call($scope.url, $scope.method)
                .then((success) => {
                    const response = new Response(success);
                    // add the url to response
                    response.url = $scope.url;
                    // add the response_time to response
                    response.response_time = new Date().getTime() - start_time;
                    // push response to responses array
                    $scope.responses.push(response);
                }, (error) => {
                    const failedresponse = new Response(error);
                    // add the url to response
                    failedresponse.url = $scope.url;
                    // add the response_time to response
                    failedresponse.response_time = new Date().getTime() - start_time;
                    // push response to responses array
                    $scope.failedresponses.push(failedresponse);
                });
        };
    });
})();