;(function () {

	angular.module("fetchApp").service("requestService", function ($http){

		this.get = (url) => $http.get(url);
		this.post = (url) => $http.post(url);
		this.head = (url) => $http.head(url);
		this.options = (url) => $http({
			method: 'OPTIONS',
			url: url
		});
		
		this.method = (url) => $http.method(url);

	});

})();