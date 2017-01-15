;
(function() {
  angular.module('fetchApp').factory('Response', function() {
    const Response = function(responseData, sendTime) {
      var receiveDate = (new Date()).getTime();
      this.responseTime = receiveDate - sendTime;
      this.statusCode = responseData.status;
      this.responseUrl = responseData.config.url;
      this.responseMethod = responseData.config.method;
      this.responseContentSize = responseData.headers('Content-Type');
    };

    return Response;
  });
})();