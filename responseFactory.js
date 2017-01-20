;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
    	console.log('responseData', responseData);
      this.statusCode = responseData.status;
    };

    return Response;
  });
})();