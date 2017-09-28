globalMod.controller('aboutMeCntrl', [function(){
	var vm = this;
	vm.myAge =	_calculateAge(1990,10,05);

	console.log(vm.myAge);

	function _calculateAge(year, mm,dd) { // birthday is a date
		var bd  = new Date(year,mm,dd);
	    var today = new Date();
	    return Math.abs(today.getUTCFullYear() - bd.getUTCFullYear());
	};
}])