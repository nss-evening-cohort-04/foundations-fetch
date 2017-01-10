;(function(){

	app = { myApp: "yes"};
	console.log("one");

})();

//iife ability to name things the same name
//make it more secure
//won't be on the global scope

;(function(){

	app = { myApp: "no"};
	console.log("two");

})();