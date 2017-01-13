;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      console.log("responseData in responseFactory",responseData )
      this.statusCode = responseData.status;
      this.responseUrl = responseData.config.url;
      this.responseMethod = responseData.config.method;
      // this.responseSize = responseData.config.;
      console.log("statusCode responseFactory",responseData);
    };

    return Response;
  });
})();