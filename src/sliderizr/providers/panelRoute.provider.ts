module sliderizr {
	'use strict';

	class PanelRouteProvider implements IPanelRouteProvider {
		routes: IRouteCollection = {};
		config: ISliderizrConfig = {
			panelTemplateUrl: 'templates/sliderizr/panel.html',
			panelInnerTemplateUrl: 'templates/sliderizr/panel-inner.html' };

		when (name: string, route: IPanelRoute) {
			this.routes[name] = angular.copy(route);
			return this;
		}

		otherwise(name: string);

		otherwise(route: IPanelRoute);

		otherwise(a: any) {
			var route = typeof a === 'string' ? <IPanelRoute>{ redirectTo: a } : <IPanelRoute>a;
			return this.when(null, route);
		}

		// @ngInject
		$get() {
			return new PanelRouteService(this.routes, this.config);
		}
	}

	class PanelRouteService implements IPanelRouteService {
		constructor(public routes: IRouteCollection, public config: ISliderizrConfig) { }
	}

	function factory(): ng.IServiceProvider {
		return new PanelRouteProvider();
	}

	angular.module('sliderizr').provider('panelRoute', factory);
}
