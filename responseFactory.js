;(function () {
   angular.module('fetchApp').factory('Response', function () {
     const Response = function (responseData) {
       this.statusCode = responseData.status;
       this.method = responseData.config.method;
       this.url = responseData.config.url;
       this.size = (responseData.data.length)/1000;
       console.log("responseData", responseData);
     };
 
     return Response;
   });
 })();