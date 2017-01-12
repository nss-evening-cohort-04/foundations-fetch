;(function() {
angular.module("fetchApp").factory("ResponseFactory", function() {
  const Response = function(responseData) {
    this.statusCode = responseData.status
    this.URL = responseData.config.url;
    this.method = responseData.config.method;
    this.contentSize = (responseData.data.length)/1000
    };
   return Response;
  });
})();