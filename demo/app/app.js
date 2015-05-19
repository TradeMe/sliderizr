(function(){
	var app = angular.module('app', [
		'sliderizr',
		'ngAnimate'
	]);

	app.config(function(panelRouteProvider){
		panelRouteProvider
			.when('default',
			{
				templateUrl: 'demo/templates/index.html',
				title: 'Default Panel',
				controller: 'defaultController',
				controllerAs: 'vm'
			})
			.when('panel1',
			{
				templateUrl: 'demo/templates/panel1.html',
				title: 'Panel One'
			})
			.when('panel2',
			{
				templateUrl: 'demo/templates/panel2.html',
				title: 'Panel Two'
			})
			.otherwise('default');
	});

	app.controller('defaultController', defaultController);

	function defaultController($panelInstance){
		var vm = this;
		vm.openPanel1 = openPanel1;

		function openPanel1(){
			$panelInstance.openChild('panel1');
		}
	}
})();