;(function () {

	angular.module("fetchApp").service("requestService", function ($http){
		this.method = (url) => $http.method(url);
		// this.post = (url) => $http.post(url);
		// this.head = (url) => $http.head(url);
		// this.options = (url) => $http.options(url);
	});

})();