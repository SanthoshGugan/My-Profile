var globalMod = angular.module("globalMod",[]);

globalMod.controller('globalCntrl', [function(){
	var vm = this;
	vm.welcome = "Hello World";
}])