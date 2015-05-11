declare module sliderizr {
	export interface IPanelOptions<T extends IRouteParams> {
		name: string;
		params?: T;
		title?:string;
	}
}
