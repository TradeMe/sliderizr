module sliderizr{
	'use strict';
	
	function factory(panelService: IPanelService): ng.IDirective{
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