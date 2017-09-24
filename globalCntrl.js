var globalMod = angular.module("globalMod",['ui.router']);

/*Configuration for router*/
globalMod.config(['$stateProvider','$urlRouteProvider',function($stateProvider,$urlRouteProvider) {

	$urlRouteProvider.otherwise('aboutMe');
	var aboutMeState= {
		name: 'aboutMe',
		url: 'about-me',
		templateUrl: './modules/aboutMe/aboutMe.html',
		controller: './modules/aboutMe/aboutMeCntrl'
	};
	$stateProvider.state(aboutMeState);
}]);

globalMod.controller('globalCntrl', [function(){
	var vm = this;
	vm.welcome = "Hello World";
}])