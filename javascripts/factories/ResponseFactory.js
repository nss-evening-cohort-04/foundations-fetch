(function(){
  angular.module("myApp").factory("Response", function() {
    const Response = function (responseData) {
      console.log("responseData:", responseData);
      this.statusCode = responseData.status;
    };

    return Response;
  });
})();
