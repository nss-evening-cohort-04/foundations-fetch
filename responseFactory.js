;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData, elapsed) {
      console.log({responseData});
      this.statusCode = responseData.status;
      this.contentSize = responseData.data.length
      this.method = responseData.config.method;
      this.elapsed  = elapsed;
    };

    return Response;
  });
})();