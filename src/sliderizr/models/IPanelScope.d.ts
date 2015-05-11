declare module sliderizr {
	export interface IPanelScope extends ng.IScope {
		$close(result?: any);
		$dismiss(reason?: any);
		$setActive(): void;
		$openChildPanel(name: string, routeParams?: IRouteParams);
		$title: string;
		$active: boolean;
		$panelSize?: PanelSize;
	}
}
