declare module sliderizr {
	export interface IPanelOptions<T extends IRouteParams> {
		name?: string;
		templateUrl?: string;
		controller?: string;
		controllerAs?: string;
		size?: PanelSize;
		params?: T;
		title?: string;
		resolve?: any;
	}
}
