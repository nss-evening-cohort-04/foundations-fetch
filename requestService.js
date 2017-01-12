
;(function () {
	angular.module('fetchApp').service('requestService', function ($http) {
  	this.get = url => $http.get(url); 
    this.post = url => $http.post(url);
});
})();


  	// this.get = function (url) {
   //  return $http.get(url);