declare module sliderizr {
	export interface IPanelRoute {
		templateUrl?: string;
		controller?: string;
		controllerAs?: string;
		title?: string;
		size?: PanelSize;
		resolve?: { [key: string]: any };
		redirectTo?: string|IPanelOptions<IRouteParams>;
	}
}
