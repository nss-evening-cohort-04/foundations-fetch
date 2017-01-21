;(function () {

	angular.module("fetchApp").service("requestService", function ($http){
		this.get = (url) => $http.get(url);
	});

	// angular.module("fetchApp").service("requestService", function ($http){
	// 	this.post = (url) => $http.post(url);
	// });

	// angular.module("fetchApp").service("requestService", function ($http){
	// 	this.options = (url) => $http.options(url);
	// });

	// angular.module("fetchApp").service("requestService", function ($http){
	// 	this.head = (url) => $http.head(url);
	// });


})();