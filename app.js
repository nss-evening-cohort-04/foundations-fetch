;(function () {

	const app = angular.module("fetchApp", []);

	app.service("requestService", function ($http){
		this.get = (url) => $http.get(url);
	});

})();	


	







