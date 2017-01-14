(function(){
  angular.module("myApp").factory("Response", function() {
    const Response = function (responseData) {
      this.requestUrl = responseData.config.url;
      this.method = responseData.config.method;
      this.timeRequestCompleted = Date.now();
      this.contentSize = responseData.headers.length;
    };

    return Response;
  });
})();
