var globalMod = angular.module("globalMod",['ui.router']);

/*Configuration for router*/
globalMod.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('aboutMe');
	var aboutMeState= {
		name: 'aboutMe',
		url: 'about-me',
		templateUrl: './modules/aboutMe/aboutMe.html',
		controller: './modules/aboutMe/aboutMeCntrl'
	};

	var mySkillsState = {
		name: 'skills',
		url: 'my-skills',
		templateUrl: './modules/mySkills/mySkills.html',
		controller: './modules/mySkills/mySkillsCntrl'
	};

	var myPortfolioState = {
		name: 'portfolio',
		url: 'my-portfolio',
		templateUrl: './modules/mySkills/myPortfolio.html',
		controller: './modules/mySkills/myPortfolioCntrl'
	};

	var myHobbiesState = {
		name: 'hobbies',
		url: 'my-hobbies',
		templateUrl: './modules/mySkills/myHobbies.html',
		controller: './modules/mySkills/myHobbiesCntrl'
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