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
                    console.log(success);
                    const response = new Response(success);
                    // push response to responses array
                    $scope.responses.push(response);
                    // add the url to response
                    response.url = $scope.url;
                    // add the response_time to response
                    response.response_time = new Date().getTime() - start_time;
                    console.log("$scope.responses = ", $scope.responses);
                    console.log("success = ", success);
                }, (error) => {
                    console.log(error);
                    debugger
                    //populate another array when you receive an error
                });
        };
    });
})();