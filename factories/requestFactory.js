;(function(){	
	angular.module("fetchApp").factory("Response", function(){

		const Response = function (responseData){
			this.statusCode = responseData.status;
			this.methodName = responseData.config.method;
			this.urlName = responseData.config.url;
			this.contentSize = responseData.data.length;
			console.log("responseData", responseData);
			debugger
			// console.log("responseData.headers()", responseData.headers());
			// debugger
		};

		return Response;
	});
})();	