module sliderizr{
	'use strict';
	
	function factory(): ng.IDirective{
		var directive = <ng.IDirective>{
			restrict: 'C',
			link: link
		};
		
		function link(){
			
		}
		
		return directive;
	}
	
	angular.module('sliderizr')
		.directive('panelContainer', factory);
}