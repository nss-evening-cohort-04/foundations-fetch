(function(){
  angular.module("myApp").factory("Response", function() {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
    };

    return Response;
  });
})();
