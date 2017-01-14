;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      this.statusDesc = responseData.data;
      this.methodName = responseData.config.method;
      this.urlName = responseData.config.url;
      //this.contentSize = responseData.wtf;
      console.log("responseData", responseData)
    };

    return Response;
  });
})();