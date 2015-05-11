module sliderizr {
	'use strict';

	function panelFactory($timeout: ng.ITimeoutService): ng.IDirective {
		var activeAnimationElement: JQuery;
		var directive = <ng.IDirective> {
			restrict: 'C',
			transclude: true,
			templateUrl: 'templates/sliderizr/panel-inner.html',
			link: link
		};

		function link(scope: IPanelScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
			scope.$watch('$active', (newValue, oldValue) => {
				if (newValue) {
					$timeout(scrollVisible,.2);
				}
			});

			function scrollVisible() {
				var parent = element.parent();
				var scrollLeft = parent.scrollLeft();
				var parentWidth = parent.outerWidth();
				var panelWidth = element.outerWidth();
				var prevSibling = element.prev();

				//Calculate offset left from previous sibling as the current element may be in the wrong position due to animations
				var offsetLeft = prevSibling.length === 0 ? 0 : (prevSibling.offset().left + prevSibling.outerWidth() - parent.offset().left) + scrollLeft;
				var visibleRight = offsetLeft + panelWidth;

				var scroll;

				if (scrollLeft > offsetLeft) {
					scroll = offsetLeft;
				} else if (scrollLeft < (visibleRight - parentWidth)) {
					scroll = visibleRight - parentWidth + 10;
				} else {
					return;
				}

				//If there is a scroll animation already in progress, stop it
				if (activeAnimationElement) {
					activeAnimationElement.stop(true, false);
				}

				//Store the element in a global so we can stop the animation if needed
				activeAnimationElement = parent;

				//Animate the scroll
				parent.animate({ scrollLeft: scroll }, 300,() => {
					activeAnimationElement = null;
				});
			}
		}

		return directive;
	}

	angular.module('sliderizr').directive('sitePanel', panelFactory);
}
