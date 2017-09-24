var globalMod = angular.module("globalMod",['ui.router']);

/*Configuration for router*/
globalMod.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('aboutMe');
	var aboutMeState= {
		name: 'aboutMe',
		url: 'about-me',
		templateUrl: './modules/aboutMe/aboutMe.html',
		controller: 'aboutMeCntrl'
	};

	var mySkillsState = {
		name: 'skills',
		url: 'my-skills',
		templateUrl: './modules/mySkills/mySkills.html',
		controller: 'mySkillsCntrl'
	};

	var myPortfolioState = {
		name: 'portfolio',
		url: 'my-portfolio',
		templateUrl: './modules/myPortfolio/myPortfolio.html',
		controller: 'myPortfolioCntrl'
	};

	var myHobbiesState = {
		name: 'hobbies',
		url: 'my-hobbies',
		templateUrl: './modules/myHobbies/myHobbies.html',
		controller: 'myHobbiesCntrl'
	};	
	$stateProvider.state(aboutMeState);
	$stateProvider.state(mySkillsState);
	$stateProvider.state(myPortfolioState);
	$stateProvider.state(myHobbiesState);
}]);

globalMod.controller('globalCntrl', [function(){
	var vm = this;
	vm.welcome = "Hello World";

	vm.headerColor = function(color){
		vm.bgColor = color;
	};
}])