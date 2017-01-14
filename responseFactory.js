;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
      this.methodName = responseData.config.method;
      this.urlName = responseData.config.url;
      this.size = (responseData.data.length)/1000;
      this.bites = responseData.size;
      console.log(responseData);
    };
    return Response;
  });
})();